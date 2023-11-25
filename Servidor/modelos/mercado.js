const mongoose = require("mongoose");
const usuario = require("./usuario");

const esquemaMercado = new mongoose.Schema(
    {
        usuario: {
            type: usuario.schema,
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
