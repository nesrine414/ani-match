from flask import Blueprint, request, jsonify
import pymysql
from dotenv import load_dotenv
import os

load_dotenv()

bp = Blueprint('search', __name__)

def get_search_db():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="ness150703**",
        database="animatchsearch_db",
        cursorclass=pymysql.cursors.DictCursor
    )

@bp.route('/api/search', methods=['GET'])
def search_pets():
    """Search pets by name or breed"""
    query = request.args.get('q', '')
    
    db = None
    cursor = None
    
    try:
        db = get_search_db()
        cursor = db.cursor()
        
        cursor.execute("""
            SELECT id, name, species, breed, image_url 
            FROM pets 
            WHERE (name LIKE %s OR breed LIKE %s OR species LIKE %s) 
            AND adoption_status = 'available'
        """, (f'%{query}%', f'%{query}%', f'%{query}%'))
        
        pets = cursor.fetchall()
        
        return jsonify(pets), 200
        
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Search failed"}), 500
        
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()


@bp.route('/api/pets', methods=['GET'])
def get_pets_by_species():
    """Get pets filtered by species"""
    species = request.args.get('species', '')
    
    db = None
    cursor = None
    
    try:
        db = get_search_db()
        cursor = db.cursor()
        
        if species:
            cursor.execute("""
                SELECT * FROM pets 
                WHERE species = %s AND adoption_status = 'available'
            """, (species,))
        else:
            cursor.execute("""
                SELECT * FROM pets 
                WHERE adoption_status = 'available'
            """)
        
        pets = cursor.fetchall()
        
        return jsonify(pets), 200
        
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Failed to fetch pets"}), 500
        
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()


@bp.route('/api/adopt', methods=['GET'])
def get_all_pets():
    """Get all available pets"""
    db = None
    cursor = None
    
    try:
        db = get_search_db()
        cursor = db.cursor()
        
        cursor.execute("""
            SELECT * FROM pets 
            WHERE adoption_status = 'available'
        """)
        
        pets = cursor.fetchall()
        
        return jsonify(pets), 200
        
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Failed to fetch pets"}), 500
        
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()