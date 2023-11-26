const Reporte = require("../modelos/reporte");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
  await controladorGenerico.obtenerTodos(Reporte, req, res);
};

exports.obtenerPorId = async (req, res) => {
  await controladorGenerico.obtenerPorId(Reporte, req, res);
};

exports.crear = async (req, res) => {
  await controladorGenerico.crear(Reporte, req, res);
};

exports.actualizar = async (req, res) => {
  await controladorGenerico.actualizar(Reporte, req, res);
};

exports.eliminar = async (req, res) => {
  await controladorGenerico.eliminar(Reporte, req, res);
};
