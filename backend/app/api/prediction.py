from fastapi import APIRouter

from app.models.prediction import (
    PredictionRequest,
    PredictionResponse,
)

from app.services.predictor import PredictionService

router = APIRouter(
    prefix="/api/v1/predict",
    tags=["Prediction"],
)

prediction_service = PredictionService()


@router.post(
    "",
    response_model=PredictionResponse,
)
def predict_house_price(
    request: PredictionRequest,
):
    data = request.model_dump()

    price = prediction_service.predict(data)

    return PredictionResponse(
        predicted_price=price,
    )