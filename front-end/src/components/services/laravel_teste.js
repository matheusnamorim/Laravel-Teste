import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api`;

function listUsers() {
    const promise = axios.get(`${BASE_URL}/usuarios`);
    return promise;
}

function listUserById(id) {
    const promise = axios.get(`${BASE_URL}/usuarios/${id}`);
    return promise;
}

function updateUserById(body, id) {
    const promise = axios.put(`${BASE_URL}/usuarios/${id}`, body);
    return promise;
}

function deleteUserById(id) {
    const promise = axios.delete(`${BASE_URL}/usuarios/${id}`);
    return promise;
}

export { listUsers, listUserById, updateUserById, deleteUserById };