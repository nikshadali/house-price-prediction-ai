# 🏠 PricePilot AI - House Price Prediction

An end-to-end Machine Learning web application that predicts California house prices using a trained Linear Regression model.

The project includes:

- 🤖 Machine Learning with Scikit-Learn
- ⚡ FastAPI Backend
- 🎨 Next.js Frontend
- 🔄 REST API Integration
- 📊 Data Preprocessing Pipeline
- 📈 House Price Prediction

---

## 📸 Screenshot

> Add screenshots here after deployment.

---

## 🚀 Demo

Frontend:
https://your-frontend-url.vercel.app

Backend API:
https://your-backend-url.onrender.com/docs

---

# Features

- Predict California house prices
- Interactive web interface
- Machine Learning pipeline
- FastAPI REST API
- Responsive UI
- Data validation using Zod
- React Hook Form
- TanStack Query

---

# Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- TanStack Query
- Axios

## Backend

- FastAPI
- Pydantic
- Uvicorn

## Machine Learning

- Scikit-Learn
- Pandas
- NumPy
- Joblib

---

# Machine Learning Model

Model:

- Linear Regression

Preprocessing:

- Missing value handling using SimpleImputer
- One-Hot Encoding
- ColumnTransformer
- Scikit-Learn Pipeline

---

# Model Performance

| Metric | Value |
|---------|-------|
| MAE | 50,670.49 |
| RMSE | 70,059.19 |
| R² Score | 0.6254 |

---

# Project Structure

```text
house-price-prediction-ai/

backend/
frontend/
ml/
models/
data/
README.md
```

---

# Installation

## Clone

```bash
git clone https://github.com/nikshadali/house-price-prediction-ai.git

cd house-price-prediction-ai
```

---

## Backend

```bash
cd backend

uv sync

uv run uvicorn app.main:app --reload
```

Backend:

```
http://localhost:8000
```

Swagger:

```
http://localhost:8000/docs
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:3000
```

---

# API Endpoint

POST

```
/api/v1/predict
```

Example Request

```json
{
  "longitude": -122.23,
  "latitude": 37.88,
  "housing_median_age": 41,
  "total_rooms": 880,
  "total_bedrooms": 129,
  "population": 322,
  "households": 126,
  "median_income": 8.3252,
  "ocean_proximity": "NEAR BAY"
}
```

Example Response

```json
{
  "predicted_price": 410584.36
}
```

---

# Future Improvements

- Random Forest
- XGBoost
- Prediction History
- Interactive Charts
- Explainable AI
- Docker
- CI/CD
- Authentication

---

# Author

Nikshad Ali

GitHub:
https://github.com/nikshadali