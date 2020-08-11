import { api2 } from '../helpers';



function ingresar(data) {
    return api2.post('/paciente/ingresar', data);
}

function eliminar(id) {
    return api2.delete('/paciente/eliminar/' + id);
}

function obtenerId(id) {
    return api2.get('/paciente/obtenerId/' + id);
}

function obtenerEstado(estado) {
    return api2.get('/paciente/obtenerEstado/' + estado);
}

function actualizarEstado(id, estado) {
    return api2.put('/paciente/actualizarEstado/' + id + '?estado=' + estado);
}

function actualizarDatos(data, id) {
    return api2.put('/paciente/actualizarDatos/' + id, data);
}

function obtenerDiagnostico(diagnostico) {
    return api2.get('/paciente/obtenerDiagnostico/' + diagnostico);
}

function obtenerEstadoDiagnostico(estado, diagnostico) {
    return api2.get('/paciente/obtenerEstadoDiagnostico?estado=' + estado + '&diagnostico=' + diagnostico);
}

function obtenerTodo() {
    return api2.get('/paciente/obtenerTodo/');
}

const pquimioService = {
    ingresar,
    eliminar,
    obtenerId,
    obtenerEstado,
    actualizarEstado,
    actualizarDatos,
    obtenerDiagnostico,
    obtenerEstadoDiagnostico,
    obtenerTodo
};

export default pquimioService;
