from flask import Flask, send_from_directory
import os
from flask_cors import CORS
import sys

# ensure backend/ is on path so we can import api_* modules
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

app = Flask(__name__, static_folder="../frontend/Ani-match/dist")
CORS(app)

# ===== IMPORT BLUEPRINTS =====
from api_home import bp as home_bp
from api_about import bp as about_bp
from api_adopt import bp as adopt_bp
from api_auth import bp as auth_bp

# ===== REGISTER BLUEPRINTS =====
app.register_blueprint(home_bp, url_prefix="/api")
app.register_blueprint(about_bp, url_prefix="/api")
app.register_blueprint(adopt_bp, url_prefix="/api")
app.register_blueprint(auth_bp, url_prefix="/api")


# ===== SERVE REACT APP =====
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
