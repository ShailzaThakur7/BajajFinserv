import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onApiResponse }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const jsonInput = JSON.parse(inputValue);
            const response = await axios.post('http://localhost:5000/bfhl', jsonInput);
            onApiResponse(response.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON or API error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter JSON input here'
            ></textarea>
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default InputForm;
