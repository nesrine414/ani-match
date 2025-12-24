from flask import Blueprint, request, jsonify
import secrets

bp = Blueprint('auth', __name__)


@bp.route('/login', methods=['POST'])
def login():
    payload = request.get_json() or {}
    email = payload.get('email')
    password = payload.get('password')
    # stubbed authentication: accept any non-empty credentials
    if email and password:
        token = secrets.token_hex(16)
        return jsonify({'token': token})
    return jsonify({'message': 'Invalid credentials'}), 401


@bp.route('/signup', methods=['POST'])
def signup():
    payload = request.get_json() or {}
    email = payload.get('email')
    password = payload.get('password')
    fullName = payload.get('fullName')
    if not email or not password:
        return jsonify({'message': 'email and password required'}), 400

    # In a real app you'd validate and persist the user. Here we return a token to simulate auto-login.
    token = secrets.token_hex(16)
    return jsonify({'status': 'created', 'user': {'email': email, 'fullName': fullName}, 'token': token}), 201
