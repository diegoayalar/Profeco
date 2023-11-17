const Usuario = require("../modelos/usuario");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Usuario, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Usuario, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Usuario, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Usuario, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Usuario, req, res);
};