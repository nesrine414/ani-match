from flask import Flask, send_from_directory
from flask_cors import CORS
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

app = Flask(__name__, static_folder="../frontend/Ani-match/dist")
CORS(app)

# 👉 Route pour servir la page React
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    full_path = os.path.join(app.static_folder, path)
    if path != "" and os.path.exists(full_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

# Blueprints
from api_home import bp as home_bp
from api_about import bp as about_bp
from api_adopt import bp as adopt_bp
from api_auth import bp as auth_bp
from api_search import bp as search_bp

app.register_blueprint(home_bp)
app.register_blueprint(about_bp)
app.register_blueprint(adopt_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(search_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)