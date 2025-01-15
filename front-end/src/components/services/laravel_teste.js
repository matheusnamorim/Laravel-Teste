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

function registerUsers(body) {
    const promise = axios.post(`${BASE_URL}/usuarios`, body);
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

function listBooks() {
    const promise = axios.get(`${BASE_URL}/livros`);
    return promise;
}

function listBookById(id) {
    const promise = axios.get(`${BASE_URL}/livros/${id}`);
    return promise;
}

function registerBooks(body) {
    const promise = axios.post(`${BASE_URL}/livros`, body);
    return promise;
}

function deleteBookById(id) {
    const promise = axios.delete(`${BASE_URL}/livros/${id}`);
    return promise;
}

function getAuthorByBookId(id) {
    const promise = axios.get(`${BASE_URL}/livros/${id}/autores`);
    return promise;
}

function updateBookById(body, id) {
    const promise = axios.put(`${BASE_URL}/livros/${id}`, body);
    return promise;
}

export { listUsers, listUserById, registerUsers, updateUserById, deleteUserById, listBooks, listBookById, registerBooks, deleteBookById, getAuthorByBookId, updateBookById };