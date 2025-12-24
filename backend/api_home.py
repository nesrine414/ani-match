from flask import Blueprint, jsonify

bp = Blueprint('home', __name__)


@bp.route('/api/home', methods=['GET'])
def home_info():
    return jsonify({
        'title': 'Welcome to Ani-Match',
        'featured': ['Cats', 'Dogs'],
    })
