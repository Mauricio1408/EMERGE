from typing import TypedDict, List

class ClusterPoint(TypedDict):
    x: float
    y: float

class Cluster(TypedDict):
    center: ClusterPoint
    points: List[ClusterPoint]