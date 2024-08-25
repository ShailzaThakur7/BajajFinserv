import axios from 'axios';

export const postJsonData = (jsonData) => {
    return axios.post('http://localhost:5000/bfhl', jsonData);
};
