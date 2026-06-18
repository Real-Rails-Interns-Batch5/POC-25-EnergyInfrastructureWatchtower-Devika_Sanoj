from fastapi import APIRouter
import pandas as pd
from pathlib import Path

router = APIRouter(
    prefix="/api/regions",
    tags=["Regions"]
)

BASE_DIR = Path(__file__).resolve().parent.parent

@router.get("/")
def regions():

    file_path = BASE_DIR / "data" / "plants.csv"

    df = pd.read_csv(file_path)

    return sorted(
        df["region"].unique().tolist()
    )