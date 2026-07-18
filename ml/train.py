import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)

from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import (
    RandomForestRegressor,
    GradientBoostingRegressor,
)

from ml.config import (
    DATA_PATH,
    MODEL_PATH,
    TARGET_COLUMN,
    TEST_SIZE,
    RANDOM_STATE,
)

from ml.pipeline import build_pipeline


def main():
    # Load dataset
    df = pd.read_csv(DATA_PATH)

    X = df.drop(columns=[TARGET_COLUMN])
    y = df[TARGET_COLUMN]

    # Split dataset
    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=TEST_SIZE,
        random_state=RANDOM_STATE,
    )

    # Models to compare
    models = {
        "Linear Regression": LinearRegression(),
        "Decision Tree": DecisionTreeRegressor(
            random_state=RANDOM_STATE
        ),
        "Random Forest": RandomForestRegressor(
            random_state=RANDOM_STATE
        ),
        "Gradient Boosting": GradientBoostingRegressor(
            random_state=RANDOM_STATE
        ),
    }

    results = []

    best_pipeline = None
    best_model_name = ""
    best_r2 = float("-inf")

    # Train & Evaluate
    for model_name, model in models.items():
        pipeline = build_pipeline(model)

        pipeline.fit(X_train, y_train)

        predictions = pipeline.predict(X_test)

        mae = mean_absolute_error(y_test, predictions)
        mse = mean_squared_error(y_test, predictions)
        rmse = mse**0.5
        r2 = r2_score(y_test, predictions)

        results.append(
            {
                "Model": model_name,
                "MAE": round(mae, 2),
                "RMSE": round(rmse, 2),
                "R²": round(r2, 4),
            }
        )

        if r2 > best_r2:
            best_r2 = r2
            best_pipeline = pipeline
            best_model_name = model_name

    # Display comparison table
    results_df = (
        pd.DataFrame(results)
        .sort_values(by="R²", ascending=False)
        .reset_index(drop=True)
    )

    print("\nModel Comparison")
    print("-" * 60)
    print(results_df.to_string(index=False))

    # Save best model
    joblib.dump(best_pipeline, MODEL_PATH)

    print("\n" + "=" * 60)
    print(f"Best Model : {best_model_name}")
    print(f"Best R²    : {best_r2:.4f}")
    print(f"Model saved to: {MODEL_PATH}")


if __name__ == "__main__":
    main()