from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import (
    plants,
    fuel_mix,
    outages,
    emissions,
    regions,
    intelligence
)

app = FastAPI(
    title="Energy Infrastructure Watchtower",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(plants.router)
app.include_router(fuel_mix.router)
app.include_router(outages.router)
app.include_router(emissions.router)
app.include_router(regions.router)
app.include_router(intelligence.router)

@app.get("/")
def home():
    return {
        "message": "Energy Infrastructure Watchtower API"
    }