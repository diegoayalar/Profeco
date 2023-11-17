const Notificacion = require("../modelos/notificacion");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Notificacion, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Notificacion, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Notificacion, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Notificacion, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Notificacion, req, res);
};