import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [responseData, setResponseData] = useState(null);

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);

            const response = await axios.post('https://vercel.com/vandit-sharmas-projects/placement-backend-sd55/DyYx4J46sw2S9st3RKYmoiH5aADG/bfhl', { data: parsedData.data });
            
            setResponseData(response.data);
        } catch (error) {
            console.error('Error submitting JSON:', error);
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
