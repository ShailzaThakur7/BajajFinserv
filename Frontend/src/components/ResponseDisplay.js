import React from 'react';

const ResponseDisplay = ({ data, filters }) => {
    return (
        <div>
            {filters.includes('numbers') && (
                <div>
                    <h2>Numbers</h2>
                    <p>{data.numbers.join(', ')}</p>
                </div>
            )}
            {filters.includes('alphabets') && (
                <div>
                    <h2>Alphabets</h2>
                    <p>{data.alphabets.join(', ')}</p>
                </div>
            )}
            {filters.includes('highest_lowercase_alphabet') && (
                <div>
                    <h2>Highest Lowercase Alphabet</h2>
                    <p>{data.highest_lowercase_alphabet.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default ResponseDisplay;
