from fastapi import FastAPI

app = FastAPI(
    title="House Price Prediction API",
    description="Predict California house prices using a trained Machine Learning model.",
    version="1.0.0",
)

@app.get("/")
def health_check():
    return {
        "status": "healthy",
        "message": "House Price Prediction API is running.",
    }
from app.api.prediction import router as prediction_router

app.include_router(prediction_router)