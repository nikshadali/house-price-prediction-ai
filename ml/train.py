import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)

from ml.config import (
     DATA_PATH,
    MODEL_DIR,
    MODEL_PATH,
    TARGET_COLUMN,
    TEST_SIZE,
    RANDOM_STATE,
)
from ml.pipeline import build_pipeline

def main():
   df = pd.read_csv(DATA_PATH)
   X = df.drop(columns=[TARGET_COLUMN])
   y = df[TARGET_COLUMN]
   X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=TEST_SIZE,
    random_state=RANDOM_STATE,
)
   pipeline = build_pipeline()
   pipeline.fit(X_train, y_train)
   predictions = pipeline.predict(X_test)
   mae = mean_absolute_error(y_test, predictions)

   mse = mean_squared_error(y_test, predictions)

   rmse = mse ** 0.5

   r2 = r2_score(y_test, predictions)
   print(f"MAE : {mae:.2f}")
   print(f"MSE : {mse:.2f}")
   print(f"RMSE: {rmse:.2f}")
   print(f"R²  : {r2:.4f}")
   joblib.dump(pipeline, MODEL_PATH)

   print(f"Model saved to: {MODEL_PATH}")
    
    
if __name__ == "__main__":
    main()

