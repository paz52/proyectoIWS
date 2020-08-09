import { api } from '../helpers';

function getAll() {
    return api.get(`/pquimios/`);
}

function getById(data) {
    return api.post(`/pquimios/`, data);
}

function getByState(data) {
    return api.get(`/pquimios/filter?estado=` + data.estado);
}

function update(data) {
    return api.put(`/pquimios/`, data);
}

function create(data) {
    return api.post(`/pquimios/`, data);
}

function borrar(data) {
    return api.delete(`/pquimios/` + data.id);
}

const pquimioService = {
    getAll,
    getById,
    getByState,
    update,
    create,
    borrar
};

export default pquimioService;
