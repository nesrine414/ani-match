from flask import Blueprint, request, jsonify
import pymysql
from dotenv import load_dotenv
import os

load_dotenv()

bp = Blueprint('search', __name__)

# Configuration depuis .env
DB_USERNAME = os.getenv('DB_USERNAME', 'root')
DB_PASSWORD = os.getenv('DB_PASSWORD', '')
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_NAME = os.getenv('DB_NAME', 'animatchSearch_db')

def get_search_db():
    return pymysql.connect(
        host=DB_HOST,
        user=DB_USERNAME,
        password=DB_PASSWORD,
        database=DB_NAME,
        cursorclass=pymysql.cursors.DictCursor
    )

@bp.route('/api/search', methods=['GET'])
def search_pets():
    """Search pets by name or breed"""
    query = request.args.get('q', '')
    
    db = get_search_db()
    cursor = db.cursor()
    
    try:
        cursor.execute("""
            SELECT id, name, species, breed, image_url 
            FROM pets 
            WHERE (breed LIKE %s OR species LIKE %s) 
            AND adoption_status = 'available'
        """, (f'%{query}%', f'%{query}%'))
        
        pets = cursor.fetchall()
        
        return jsonify(pets), 200
        
    finally:
        cursor.close()
        db.close()