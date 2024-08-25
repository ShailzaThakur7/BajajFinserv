import React from 'react';

const DropdownFilter = ({ onChange }) => {
    const handleChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        onChange(selectedOptions);
    };

    return (
        <select multiple onChange={handleChange}>
            <option value="numbers">Numbers</option>
            <option value="alphabets">Alphabets</option>
            <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
        </select>
    );
};

export default DropdownFilter;
