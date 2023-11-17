const Producto = require("../modelos/producto");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Producto, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Producto, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Producto, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Producto, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Producto, req, res);
};