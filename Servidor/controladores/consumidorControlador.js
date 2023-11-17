const Consumidor = require("../modelos/consumidor");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Consumidor, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Consumidor, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Consumidor, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Consumidor, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Consumidor, req, res);
};