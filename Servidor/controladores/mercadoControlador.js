const Mercado = require("../modelos/mercado");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    try {
        const entidades = await Mercado.find()
        .populate('usuario')
        .populate('productos')
        res.json(entidades);
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al obtener entidades: ${error.message}`,
        });
    }
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Mercado, req, res);
};

exports.obtenerPorUsuario = async (req, res) => {
    const { usuarioId } = req.params;

    try {
        const mercado = await Mercado.findOne({ usuarioId: usuarioId })
        .populate('usuario')
        .populate('productos');

        if (!mercado) {
            return res.status(404).json({ mensaje: 'Mercado no encontrado para este usuario' });
        }

        res.json(mercado);
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al obtener Mercado por ID de Usuario: ${error.message}`,
        });
    }
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