from fastapi import APIRouter
from app.services.eia_service import get_fuel_mix

router = APIRouter(
    prefix="/api/fuel-mix",
    tags=["Fuel Mix"]
)

@router.get("/")
def fuel_mix():

    return get_fuel_mix()