import axios from "axios";

// API Path
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default api;