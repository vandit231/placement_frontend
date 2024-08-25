import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            // Try parsing JSON input
            let parsedData;
            try {
                parsedData = JSON.parse(jsonInput);
            } catch (jsonError) {
                setError('Invalid JSON input.');
                return;
            }

            // Make POST request with parsed JSON data
            const response = await axios.post('https://vercel.com/vandit-sharmas-projects/placement-backend-sd55/4KCTykoxStL6529nJQNRf7ben4Na/bfhl', parsedData);
            
            setResponseData(response.data);
            setError('');
        } catch (error) {
            console.error('Error submitting JSON:', error);
            setError('Error submitting JSON.');
        }
    };

    return (
        <div>
            <h1>{responseData?.roll_number || '21bci0360'}</h1>
            <textarea
                value={jsonInput}
                onChange={e => setJsonInput(e.target.value)}
                placeholder="Enter JSON"
                rows="10"
                cols="50"
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            {error && (
                <div style={{ color: 'red' }}>
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}
            {responseData && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default App;
