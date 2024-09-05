import React, { useState } from 'react';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Textarea, 
    Button, 
    Progress } 
from '@nextui-org/react';
import axios from 'axios';

const SpamDetector: React.FC = () => {
    const [emailContent, setEmailContent] = useState('');
    const [result, setResult] = useState<{ is_spam: boolean, spam_probability: number, message: string } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleDetectSpam = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/detect_spam', { email: emailContent });
            setResult(response.data);
        } catch (error) {
            console.error("There was an error detecting spam:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md p-6 space-y-4">
            <CardHeader className="pb-0 pt-2">
                <p className="font-bold text-primary">
                    Spam Detector
                </p>
            </CardHeader>
            <CardBody className="py-2">
                <Textarea
                    color="primary"
                    placeholder="Enter email content here..."
                    rows={6}
                    width="100%"
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
            {result && (
                <CardFooter>
                    <div className="w-full space-y-2">
                        <p>{result.message}</p>
                        <Progress
                            value={result.spam_probability * 100}
                            color={result.is_spam ? "danger" : "success"}

                            className="w-full"
                        />
                        <p>
                            Spam Probability: {(result.spam_probability * 100).toFixed(2)}%
                        </p>
                    </div>
                </CardFooter>
            )}
        </Card>
    );
};

export default SpamDetector;