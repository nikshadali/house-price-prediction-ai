from pydantic import BaseModel

class PredictionRequest(BaseModel):
    longitude: float
    latitude: float
    housing_median_age: float
    total_rooms: float
    total_bedrooms: float
    population: float
    households: float
    median_income: float
    ocean_proximity: str

class PredictionResponse(BaseModel):
    predicted_price: float