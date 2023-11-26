const Usuario = require("../modelos/usuario");
const controladorGenerico = require("./controladorGenerico");
const bcrypt = require('bcrypt');
const jwtUtil = require('../utilidades/jwtUtil');

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

exports.autenticar = async (req, res) => {
    const { nombre, contrasena } = req.body;

    try {
        const usuario = await Usuario.findOne({ nombre: nombre });
        if (!usuario) {
            return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
        }

        const esContrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!esContrasenaValida) {
            return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
        }

        const token = jwtUtil.generarToken({ nombre: usuario.nombre, rol: usuario.rol });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: `Error al autenticar usuario: ${error.message}` });
    }
};