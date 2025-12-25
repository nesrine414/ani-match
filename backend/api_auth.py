from flask import Blueprint, request, jsonify
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

bp = Blueprint('auth', __name__)

def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="YOUR_MYSQL_PASSWORD",
        database="animatch_db"
    )

# ===== SIGNUP =====
@bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json() or {}

    full_name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')
    location = data.get('location')
    phone = data.get('phone')

    if not email or not password:
        return jsonify({'message': 'Missing fields'}), 400

    hashed_password = generate_password_hash(password)

    db = get_db()
    cursor = db.cursor()

    try:
        cursor.execute("""
            INSERT INTO users (full_name, email, password, location, phone)
            VALUES (%s, %s, %s, %s, %s)
        """, (full_name, email, hashed_password, location, phone))

        db.commit()
    except mysql.connector.Error:
        return jsonify({'message': 'Email already exists'}), 409
    finally:
        cursor.close()
        db.close()

    return jsonify({'message': 'Account created successfully'}), 201


# ===== LOGIN =====
@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Missing fields'}), 400

    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()

    cursor.close()
    db.close()

    if not user:
        return jsonify({'message': 'User not found'}), 401

    if not check_password_hash(user['password'], password):
        return jsonify({'message': 'Wrong password'}), 401

    return jsonify({
        'message': 'Login successful',
        'user': {
            'id': user['id'],
            'full_name': user['full_name'],
            'email': user['email'],
            'location': user['location'],
            'phone': user['phone']
        }
    }), 200
