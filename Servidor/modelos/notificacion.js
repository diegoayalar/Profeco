const mongoose = require("mongoose");

const esquemaNotificacion = new mongoose.Schema(
    {
        producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
        activa: { type: Boolean, default: false },
        usuariosNotificados: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Consumidor" },
        ],
        fechaCreacion: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
    }
);

const notificacion = mongoose.model("Notificacion", esquemaNotificacion);

module.exports = notificacion;
