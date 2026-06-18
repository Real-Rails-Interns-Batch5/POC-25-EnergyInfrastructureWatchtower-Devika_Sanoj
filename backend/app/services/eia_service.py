import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


def get_plants():

    file_path = BASE_DIR / "data" / "plants.csv"

    return pd.read_csv(file_path).to_dict(
        orient="records"
    )


def get_fuel_mix():

    file_path = BASE_DIR / "data" / "fuel_mix.csv"

    return pd.read_csv(file_path).to_dict(
        orient="records"
    )