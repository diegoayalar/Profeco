const Mercado = require("../modelos/mercado");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Mercado, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Mercado, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Mercado, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Mercado, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Mercado, req, res);
};