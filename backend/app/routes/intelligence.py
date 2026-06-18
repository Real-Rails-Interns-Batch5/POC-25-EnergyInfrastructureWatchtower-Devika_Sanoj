from fastapi import APIRouter
from app.services.intelligence_service import (
    get_dashboard_metrics
)

router = APIRouter(
    prefix="/api/intelligence",
    tags=["Intelligence"]
)

@router.get("/dashboard")
def dashboard():

    return get_dashboard_metrics()