from flask import Flask, request, jsonify
from flask_cors import CORS
from spam_model import SpamDetector
import os

app = Flask(__name__)
CORS(app)

spam_detector = SpamDetector()


if os.path.exists('spam_model.joblib'):
    spam_detector.load_model()

@app.route('/api/detect_spam', methods=['POST'])
def detect_spam():
    data = request.json
    email_content = data.get('email', '')
    
   
    if spam_detector.model is None:
        emails = [
            "Free offer! Click now!", "Meeting at 3pm tomorrow",
            "Claim your prize! Limited time!", "Project report due Friday",
            "You've won! Contact us now!", "Lunch meeting with clients"
        ]
        labels = [1, 0, 1, 0, 1, 0]
        spam_detector.train(emails, labels)
        spam_detector.save_model()
    
    # Predict
    is_spam, spam_probability = spam_detector.predict(email_content)
    
    result = {
        "is_spam": is_spam,
        "spam_probability": spam_probability,
        "message": "This email is likely spam." if is_spam else "This email is likely not spam."
    }
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)