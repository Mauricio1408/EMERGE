from flask import Blueprint, request, jsonify
from .clustering import perform_clustering
from .data_loader import load_all_data

bp = Blueprint('routes', __name__)

boundary, risk_layers, population = load_all_data()

@bp.route('/api/cluster', methods=['GET'])
def cluster():
    n_responders = int(request.args.get('n_responders', 10))
    response = perform_clustering(boundary, risk_layers, n_responders)
    return jsonify(response)