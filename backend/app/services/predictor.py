import joblib
import pandas as pd

from backend.app.core.config import MODEL_PATH


class PredictionService:
    """Service responsible for loading the ML pipeline and making predictions."""

    def __init__(self):
        self.pipeline = joblib.load(MODEL_PATH)

    def predict(self, data: dict) -> float:
        input_df = pd.DataFrame([data])

        prediction = self.pipeline.predict(input_df)

        return float(prediction[0])