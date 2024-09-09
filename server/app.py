from flask import Flask, request, jsonify
from flask_cors import CORS
from spam_model import SpamDetector
import os

app = Flask(__name__)
CORS(app)

spam_detector = SpamDetector()

if os.path.exists('spam_model.joblib'):
    spam_detector.load_model()
else:
    spam_detector.train_from_csv('spam_assassin.csv')
    spam_detector.save_model()

@app.route('/detect_spam', methods=['POST'])
def detect_spam():
    data = request.json
    email_content = data.get('email', '')
    
    is_spam, spam_probability = spam_detector.predict(email_content)
    
    #if the probability is greater than 20%
    is_spam = spam_probability > 0.2
    
    result = {
        "is_spam": is_spam,
        "spam_probability": spam_probability,
        "message": "This email is likely spam." if is_spam else "This email is likely not spam."
    }
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)