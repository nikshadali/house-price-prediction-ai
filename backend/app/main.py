from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="House Price Prediction API",
    description="Predict California house prices using a trained Machine Learning model.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://house-price-prediction-ai-peach.vercel.app",
        "https://house-price-prediction-ai-peach.vercel.app/"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {
        "status": "healthy",
        "message": "House Price Prediction API is running.",
    }
from app.api.prediction import router as prediction_router

app.include_router(prediction_router)