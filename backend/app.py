from flask import Flask
from flask_cors import CORS
from api_auth import bp as auth_bp
from api_search import bp as search_bp

app = Flask(__name__)
CORS(app)

# Enregistrer les blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(search_bp)

@app.route('/')
def home():
    return {"message": "Ani-Match API is running! 🐾"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)