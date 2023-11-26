const Notificacion = require("../modelos/notificacion");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
  await controladorGenerico.obtenerTodos(Notificacion, req, res);
};

exports.obtenerPorId = async (req, res) => {
  await controladorGenerico.obtenerPorId(Notificacion, req, res);
};

exports.crear = async (req, res) => {
  try {
    const { producto, activa, usuariosNotificados, mensaje } = req.body;
    const nuevaNotificacion = new Notificacion({
      producto,
      activa,
      usuariosNotificados,
      mensaje,
    });
    const notificacionCreada = await nuevaNotificacion.save();

    res.status(201).json(notificacionCreada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la notificación" });
  }
};

exports.actualizar = async (req, res) => {
  await controladorGenerico.actualizar(Notificacion, req, res);
};

exports.eliminar = async (req, res) => {
  await controladorGenerico.eliminar(Notificacion, req, res);
};

exports.activarNotificacion = async (req, res) => {
  try {
    const { idNotificacion, idUsuario } = req.body;
    
    // Lógica para activar notificación y asociarla a un usuario
    const notificacion = await Notificacion.findByIdAndUpdate(
      idNotificacion,
      { $addToSet: { usuariosNotificados: idUsuario }, activa: true },
      { new: true }
    );

    if (!notificacion) {
      return res.status(404).json({ mensaje: "Notificación no encontrada" });
    }

    res.status(200).json({ mensaje: "Notificación activada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al activar notificación" });
  }
};