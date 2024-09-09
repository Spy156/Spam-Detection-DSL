import joblib
import os
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from sklearn.pipeline import Pipeline

class SpamDetector:
    def __init__(self):
        self.model = None

    def train_from_csv(self, csv_path):
        df = pd.read_csv(csv_path)
        
        X = df['text']
        y = df['label']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        self.model = Pipeline([
            ('tfidf', TfidfVectorizer(max_features=5000, ngram_range=(1, 2))),
            ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
        ])

        # Train
        self.model.fit(X_train, y_train)

        # Evaluate
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        print(f"Model Accuracy: {accuracy}")
        print("\nClassification Report:")
        print(classification_report(y_test, y_pred))

    def save_model(self, model_path='spam_model.joblib'):
        joblib.dump(self.model, model_path)

    def load_model(self, model_path='spam_model.joblib'):
        if os.path.exists(model_path):
            self.model = joblib.load(model_path)
        else:
            raise FileNotFoundError("Model file not found. Please train the model first.")

    def predict(self, email):
        if self.model is None:
            raise ValueError("Model not loaded or trained. Please load or train the model first.")
        
        prediction = self.model.predict([email])
        probability = self.model.predict_proba([email])[0][1]  # Probability of being spam
        
        return bool(prediction[0]), float(probability)