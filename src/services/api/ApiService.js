import axios from 'axios';

const API_URL = "http://localhost:5000/api/v1"

var api = axios.create({
    baseURL:API_URL,
    timeout:5000
})

export default api;
