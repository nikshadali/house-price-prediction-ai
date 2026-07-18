from pathlib import Path

# -------------------------
# Project Paths
# -------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

DATA_DIR = BASE_DIR / "data"
MODEL_DIR = BASE_DIR / "models"

# Create models directory if it doesn't exist
MODEL_DIR.mkdir(parents=True, exist_ok=True)

DATA_PATH = DATA_DIR / "housing.csv"
MODEL_PATH = MODEL_DIR / "house_price_pipeline.pkl"

# -------------------------
# Dataset
# -------------------------

TARGET_COLUMN = "median_house_value"

CATEGORICAL_FEATURES = [
    "ocean_proximity",
]

NUMERIC_FEATURES = [
    "longitude",
    "latitude",
    "housing_median_age",
    "total_rooms",
    "total_bedrooms",
    "population",
    "households",
    "median_income",
]

# -------------------------
# Training
# -------------------------

TEST_SIZE = 0.20
RANDOM_STATE = 42