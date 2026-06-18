from fastapi import APIRouter
from app.services.mock_service import (
    load_mock_outages
)

router = APIRouter(
    prefix="/api/outages",
    tags=["Outages"]
)

@router.get("/")
def outages():

    return load_mock_outages()