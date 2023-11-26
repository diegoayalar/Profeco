const mongoose = require("mongoose");

const esquemaMercado = new mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId, ref: "Usuario",
            required: true,
        },
        productos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
        notificaciones: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Notificacion" },
        ],
    },
    {
        versionKey: false,
    }
);

const mercado = mongoose.model("Mercado", esquemaMercado);

module.exports = mercado;
