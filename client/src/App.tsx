import React from 'react';
import SpamDetector from './components/SpamDetector';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <SpamDetector />
        </div>
    );
};

export default App;