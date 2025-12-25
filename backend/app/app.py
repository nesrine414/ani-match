from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()
print("=" * 50)
print(f"Username: {os.getenv('DB_USERNAME')}")
print(f"Password: {os.getenv('DB_PASSWORD')}")
print(f"Host: {os.getenv('DB_HOST')}")
print(f"Database: {os.getenv('DB_NAME')}")
print("=" * 50)
app = Flask(__name__)
CORS(app)

# Database configuration
# Prefer explicit DATABASE_URL, otherwise fall back to MySQL if env vars set,
# otherwise use a local SQLite file for development to avoid requiring a DB server.
db_url = os.getenv('DATABASE_URL')
if not db_url:
    db_username = os.getenv('DB_USERNAME')
    db_password = os.getenv('DB_PASSWORD')
    db_host = os.getenv('DB_HOST')
    db_name = os.getenv('DB_NAME')
    if db_username and db_password and db_host and db_name:
        db_url = f"mysql+pymysql://{db_username}:{db_password}@{db_host}/{db_name}"
    else:
        # use a local sqlite file inside backend folder for development
        db_file = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data', 'dev.db'))
        os.makedirs(os.path.dirname(db_file), exist_ok=True)
        db_url = f"sqlite:///{db_file}"

app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['UPLOAD_FOLDER'] = 'uploads/pets'

db = SQLAlchemy(app)

# Models
class Pet(db.Model):
    __tablename__ = 'pets'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    species = db.Column(db.String(50), nullable=False)  # cat, dog, etc.
    breed = db.Column(db.String(100))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(10))
    size = db.Column(db.String(20))  # small, medium, large
    color = db.Column(db.String(50))
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    adoption_status = db.Column(db.String(20), default='available')  # available, pending, adopted
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    adoptions = db.relationship('Adoption', backref='pet', lazy=True)

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20))
    address = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    adoptions = db.relationship('Adoption', backref='user', lazy=True)

class Adoption(db.Model):
    __tablename__ = 'adoptions'
    
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    status = db.Column(db.String(20), default='pending')  # pending, approved, rejected
    application_date = db.Column(db.DateTime, default=datetime.utcnow)
    notes = db.Column(db.Text)

# Routes
@app.route('/api/pets', methods=['GET'])
def get_pets():
    """Get all available pets with optional filtering"""
    species = request.args.get('species')
    search = request.args.get('search')
    
    query = Pet.query.filter_by(adoption_status='available')
    
    if species:
        query = query.filter_by(species=species)
    
    if search:
        query = query.filter(Pet.name.ilike(f'%{search}%'))
    
    pets = query.all()
    
    return jsonify([{
        'id': pet.id,
        'name': pet.name,
        'species': pet.species,
        'breed': pet.breed,
        'age': pet.age,
        'gender': pet.gender,
        'size': pet.size,
        'color': pet.color,
        'description': pet.description,
        'image_url': pet.image_url,
        'adoption_status': pet.adoption_status
    } for pet in pets])

@app.route('/api/pets/<int:pet_id>', methods=['GET'])
def get_pet(pet_id):
    """Get single pet details"""
    pet = Pet.query.get_or_404(pet_id)
    
    return jsonify({
        'id': pet.id,
        'name': pet.name,
        'species': pet.species,
        'breed': pet.breed,
        'age': pet.age,
        'gender': pet.gender,
        'size': pet.size,
        'color': pet.color,
        'description': pet.description,
        'image_url': pet.image_url,
        'adoption_status': pet.adoption_status
    })

@app.route('/api/pets', methods=['POST'])
def create_pet():
    """Add a new pet (admin function)"""
    data = request.json
    
    new_pet = Pet(
        name=data['name'],
        species=data['species'],
        breed=data.get('breed'),
        age=data.get('age'),
        gender=data.get('gender'),
        size=data.get('size'),
        color=data.get('color'),
        description=data.get('description'),
        image_url=data.get('image_url')
    )
    
    db.session.add(new_pet)
    db.session.commit()
    
    return jsonify({'message': 'Pet added successfully', 'id': new_pet.id}), 201

@app.route('/api/adoptions', methods=['POST'])
def submit_adoption():
    """Submit an adoption application"""
    data = request.json
    
    # Create or get user
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        user = User(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone'),
            address=data.get('address')
        )
        db.session.add(user)
        db.session.flush()
    
    # Create adoption application
    adoption = Adoption(
        pet_id=data['pet_id'],
        user_id=user.id,
        notes=data.get('notes')
    )
    
    db.session.add(adoption)
    db.session.commit()
    
    return jsonify({'message': 'Adoption application submitted successfully'}), 201

@app.route('/api/adoptions/<int:adoption_id>', methods=['PATCH'])
def update_adoption_status(adoption_id):
    """Update adoption application status (admin function)"""
    adoption = Adoption.query.get_or_404(adoption_id)
    data = request.json
    
    adoption.status = data['status']
    
    if data['status'] == 'approved':
        pet = Pet.query.get(adoption.pet_id)
        pet.adoption_status = 'adopted'
    
    db.session.commit()
    
    return jsonify({'message': 'Adoption status updated successfully'})

@app.route('/api/search', methods=['GET'])
def search_pets():
    """Search pets by name or breed"""
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

# Database initialization (only auto-create for SQLite to avoid requiring external DB credentials)
with app.app_context():
    try:
        if app.config['SQLALCHEMY_DATABASE_URI'].startswith('sqlite:'):
            db.create_all()
        else:
            app.logger.info('Skipping automatic create_all for non-SQLite database.')
    except Exception as e:
        app.logger.error(f'Could not initialize database schema: {e}')

if __name__ == '__main__':
    app.run(debug=True, port=5000)