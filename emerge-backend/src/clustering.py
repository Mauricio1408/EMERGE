import numpy as np
from sklearn.cluster import KMeans

def perform_clustering(boundary, risk_layers, n_responders):
    selectable_keys = ["Flooding", "Landslide", "Earthquake"]
    selected_points = []
    for key in selectable_keys:
        layer = risk_layers[key]
        clipped = layer.overlay(boundary, how="intersection")
        centroids = clipped.geometry.centroid
        selected_points.extend(centroids)
    coords = np.array([[geom.x, geom.y] for geom in selected_points])
    kmeans = KMeans(n_clusters=n_responders, random_state=42)
    labels = kmeans.fit_predict(coords)
    centers = kmeans.cluster_centers_
    response = {
        "clusters": [
            {
                "center": {"x": float(center[0]), "y": float(center[1])},
                "points": [
                    {"x": float(coords[i][0]), "y": float(coords[i][1])}
                    for i in range(len(labels)) if labels[i] == idx
                ]
            }
            for idx, center in enumerate(centers)
        ]
    }
    return response