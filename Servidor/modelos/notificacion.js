const mongoose = require("mongoose");

const esquemaNotificacion = new mongoose.Schema(
  {
    producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
    activa: { type: Boolean, default: false },
    usuariosNotificados: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Consumidor" },
    ],
    fechaCreacion: { type: Date, default: Date.now },
    mensaje: { type: String, required: true }, // Nueva propiedad para el mensaje de la notificación
    leida: { type: Boolean, default: false }, // Nueva propiedad para indicar si la notificación ha sido leída
  },
  {
    versionKey: false,
  }
);

const Notificacion = mongoose.model("Notificacion", esquemaNotificacion);

module.exports = Notificacion;
