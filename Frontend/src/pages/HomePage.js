import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import ResponseDisplay from '../components/ResponseDisplay';
import DropdownFilter from '../components/DropDownFilter';

const HomePage = () => {
    const [response, setResponse] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleApiResponse = (data) => {
        setResponse(data);
    };

    const handleFilterChange = (filters) => {
        setSelectedFilters(filters);
    };

    return (
        <div>
            <h1>Bajaj Finserv Health Challenge</h1>
            <InputForm onApiResponse={handleApiResponse} />
            {response && (
                <>
                    <DropdownFilter onChange={handleFilterChange} />
                    <ResponseDisplay data={response} filters={selectedFilters} />
                </>
            )}
        </div>
    );
};

export default HomePage;
