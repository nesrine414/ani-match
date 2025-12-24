from flask import Blueprint, jsonify

bp = Blueprint('about', __name__)


@bp.route('/api/about', methods=['GET'])
def about_info():
    return jsonify({
        'name': 'Ani-Match',
        'mission': 'Connect pets with loving families',
    })
