from flask import Blueprint, request, jsonify

bp = Blueprint('search', __name__)


@bp.route('/api/search', methods=['GET'])
def search_pets():
    """Search pets by name or breed"""
    # Import models here to avoid circular import at module import time
    from app.app import db, Pet

    query = request.args.get('q', '')

    pets = Pet.query.filter(
        db.or_(
            Pet.name.ilike(f'%{query}%'),
            Pet.breed.ilike(f'%{query}%')
        ),
        Pet.adoption_status == 'available'
    ).all()

    return jsonify([{
        'id': pet.id,
        'name': pet.name,
        'species': pet.species,
        'breed': pet.breed,
        'image_url': pet.image_url
    } for pet in pets])
