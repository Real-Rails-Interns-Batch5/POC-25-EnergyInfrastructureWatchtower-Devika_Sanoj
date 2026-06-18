from fastapi import APIRouter
from app.services.eia_service import get_plants

router = APIRouter(
    prefix="/api/plants",
    tags=["Plants"]
)

@router.get("/")
def plants():

    return get_plants()