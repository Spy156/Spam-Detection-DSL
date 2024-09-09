import React, { useState } from 'react';
import { Card, CardBody, Textarea, Button } from '@nextui-org/react';
import axios from 'axios';

const SpamDetector: React.FC = () => {
  const [emailContent, setEmailContent] = useState('');
  const [result, setResult] = useState<{ isSpam: boolean; probability: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDetectSpam = async () => {
    if (!emailContent.trim()) {
      alert('Please enter some email content.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/detect_spam', {
        email: emailContent
      });
      setResult({
        isSpam: response.data.is_spam,
        probability: response.data.spam_probability
      });
    } catch (error) {
      console.error('Error detecting spam:', error);
      alert('An error occurred while detecting spam. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resultColor = result?.isSpam ? 'text-red-500' : 'text-cyan-500';

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg">
        <CardBody className="p-6">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-950">
            Check if Your <span className="text-cyan-500">Email</span> is <span className="text-cyan-500">Spam</span>
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Analyze your email to see if it might be flagged as spam
          </p>
          <Textarea
            placeholder="Paste your email content here..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            rows={6}
            className="w-full mb-4"
          />
          <Button 
            color="primary"
            className="w-full font-semibold mb-6" 
            onClick={handleDetectSpam}
            disabled={isLoading}
          >
            {isLoading ? 'DETECTING...' : 'DETECT SPAM'}
          </Button>
          {result && (
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-950">
                The email is classified as{' '}
                <span className={`font-bold ${resultColor}`}>
                  {result.isSpam ? 'SPAM' : 'NOT SPAM'}
                </span>
              </p>
              <p className="text-lg text-gray-950">
                The probability of spam is{' '}
                <span className={`font-bold ${resultColor}`}>
                  {(result.probability * 100).toFixed(2)}%
                </span>
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default SpamDetector;