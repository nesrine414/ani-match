from flask import Blueprint, request, jsonify
import pymysql
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os

load_dotenv()

bp = Blueprint('auth', __name__)

# Configuration depuis .env
AUTH_DB_USERNAME = os.getenv('AUTH_DB_USERNAME', 'root')
AUTH_DB_PASSWORD = os.getenv('AUTH_DB_PASSWORD', '')
AUTH_DB_HOST = os.getenv('AUTH_DB_HOST', 'localhost')
AUTH_DB_NAME = os.getenv('AUTH_DB_NAME', 'animatch_db')

def get_db():
    return pymysql.connect(
        host=AUTH_DB_HOST,
        user=AUTH_DB_USERNAME,
        password=AUTH_DB_PASSWORD,
        database=AUTH_DB_NAME,
        cursorclass=pymysql.cursors.DictCursor
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
    except pymysql.err.IntegrityError:
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
    cursor = db.cursor()

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