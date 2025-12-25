from flask import Blueprint, request, jsonify
import pymysql
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os

load_dotenv()

bp = Blueprint("auth", __name__, url_prefix="/api")


def get_db():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="ness150703**",
        database="animatch_db",
        cursorclass=pymysql.cursors.DictCursor
    )


@bp.route("/signup", methods=["POST"])
def signup():
    db = None
    cursor = None
    
    data = request.json

    full_name = data.get("fullName")
    email = data.get("email")
    password = data.get("password")
    location = data.get("location")
    phone_number = data.get("phoneNumber")

    if not full_name or not email or not password:
        return jsonify({"message": "Missing fields"}), 400

    hashed_password = generate_password_hash(password)

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            """
            INSERT INTO users (full_name, email, password, location, phone)
            VALUES (%s, %s, %s, %s, %s)
            """,
            (full_name, email, hashed_password, location, phone_number)
        )

        db.commit()
        return jsonify({"message": "Signup successful"}), 201

    except pymysql.IntegrityError as e:
        if "Duplicate entry" in str(e):
            return jsonify({"message": "Email already exists"}), 409
        return jsonify({"message": "Database error"}), 500
        
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Signup failed"}), 500

    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()


# ========== NOUVELLE ROUTE LOGIN ==========
@bp.route("/login", methods=["POST"])
def login():
    db = None
    cursor = None
    
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password required"}), 400

    try:
        db = get_db()
        cursor = db.cursor()

        # Chercher l'utilisateur par email
        cursor.execute(
            "SELECT * FROM users WHERE email = %s",
            (email,)
        )
        
        user = cursor.fetchone()

        # Vérifier si l'utilisateur existe
        if not user:
            return jsonify({"message": "Invalid email or password"}), 401

        # Vérifier le mot de passe
        if not check_password_hash(user['password'], password):
            return jsonify({"message": "Invalid email or password"}), 401

        # Login réussi - renvoyer les infos de l'utilisateur (sans le mot de passe)
        user_data = {
            "id": user['id'],
            "full_name": user['full_name'],
            "email": user['email'],
            "location": user.get('location'),
            "phone": user.get('phone')
        }

        return jsonify({
            "message": "Login successful",
            "user": user_data
        }), 200

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Login failed"}), 500

    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()