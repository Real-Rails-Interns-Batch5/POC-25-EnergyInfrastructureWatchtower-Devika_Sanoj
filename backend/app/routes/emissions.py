from fastapi import APIRouter
from app.services.owid_service import (
    get_emissions
)

router = APIRouter(
    prefix="/api/emissions",
    tags=["Emissions"]
)

@router.get("/")
def emissions():

    return get_emissions()