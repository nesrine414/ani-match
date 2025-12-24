from flask import Blueprint, request, jsonify

bp = Blueprint('adopt', __name__)


@bp.route('/adopt', methods=['POST'])
def submit_adoption():
    data = request.get_json() or {}
    # In a real app you'd validate and persist this
    return jsonify({'status': 'received', 'data': data}), 201

@bp.route('/api/adopt', methods=['GET'])
def adopt_info():
    return jsonify({'instructions': 'Fill the adoption request form and we will contact you.'})
