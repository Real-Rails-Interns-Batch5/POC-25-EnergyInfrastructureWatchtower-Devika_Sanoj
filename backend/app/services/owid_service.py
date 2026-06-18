import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


def get_emissions():

    file_path = BASE_DIR / "data" / "emissions.csv"

    return pd.read_csv(file_path).to_dict(
        orient="records"
    )