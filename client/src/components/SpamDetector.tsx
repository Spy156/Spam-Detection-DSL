import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Textarea,
  Button,
  Progress,
  Spinner,
} from '@nextui-org/react';
import axios from 'axios';

const SpamDetector: React.FC = () => {
  const [emailContent, setEmailContent] = useState('');
  const [result, setResult] = useState<{
    is_spam: boolean;
    spam_probability: number;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDetectSpam = async () => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await axios.post('http://localhost:5000/api/detect_spam', {
        email: emailContent,
      });
      setResult(response.data);
    } catch (error) {
      console.error('There was an error detecting spam:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center text-xl font-bold">
        Spam Detector
      </CardHeader>
      <CardBody>
        <Textarea
          label="Enter Email Content"
          placeholder="Paste your email content here..."
          rows={6}
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          className="mb-4"
        />
        <Button
          color="primary"
          onClick={handleDetectSpam}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Detecting...' : 'Detect Spam'}
        </Button>
      </CardBody>

      {isLoading && (
        <CardFooter>
          <div className="flex justify-center">
            <Spinner size="lg" />
          </div>
        </CardFooter>
      )}

      {result && (
        <CardFooter>
          <div className="w-full space-y-2">
            <p>{result.message}</p>
            <Progress
              value={result.spam_probability * 100}
              color={result.is_spam ? 'danger' : 'success'}
              className="w-full"
            />
            <p>Spam Probability: {(result.spam_probability * 100).toFixed(2)}%</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default SpamDetector;
