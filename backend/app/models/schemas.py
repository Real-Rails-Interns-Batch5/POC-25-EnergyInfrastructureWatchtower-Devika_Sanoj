from pydantic import BaseModel


class Plant(BaseModel):
    id: int
    name: str
    fuel_type: str
    capacity_mw: float
    lat: float
    lng: float
    region: str


class FuelMix(BaseModel):
    fuel: str
    share: float


class Outage(BaseModel):
    event_id: int
    region: str
    cause: str
    customers_affected: int
    date: str


class Emission(BaseModel):
    region: str
    co2_mt: float