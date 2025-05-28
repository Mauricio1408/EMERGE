import geopandas as gpd
import pandas as pd

def load_all_data():
    boundary = gpd.read_file("./DATAV2/Santa Barbara - Barangay Boundary.gpkg")
    flooding = gpd.read_file("./DATAV2/Risks/Santa Barbara - Flooding.gpkg")
    landslide = gpd.read_file("./DATAV2/Risks/Santa Barbara - Landslide.gpkg")
    faults = gpd.read_file("./DATAV2/Risks/Santa Barbara - Nearest Fault.gpkg")
    population = pd.read_csv("./DATAV2/Risks/Santa Barbara - Vulnerability Data.csv")
    risk_layers = {
        "Flooding": flooding,
        "Landslide": landslide,
        "Earthquake": faults
    }
    return boundary, risk_layers, population