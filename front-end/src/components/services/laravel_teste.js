import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function listUsers() {
    const promise = axios.get(`${BASE_URL}/api/usuarios`);
    return promise;
}

export { listUsers };