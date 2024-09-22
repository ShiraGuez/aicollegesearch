from flask import Flask, jsonify, request
from backend.college_agent import CollegeAgent

backend_app = Flask(__name__)

@backend_app.route('/', methods=['GET'])
def index():
    return jsonify({"status": "Running"}), 200

@backend_app.route('/search', methods=['POST'])
def search():
    data = request.json
    college_agent = CollegeAgent()
    results = college_agent.run(data["criteria"])
    return jsonify({"results": results}), 200
