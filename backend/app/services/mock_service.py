import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

def load_mock_outages():
    file_path = BASE_DIR / "data" / "mock_outages.json"

    with open(file_path, "r") as file:
        return json.load(file)