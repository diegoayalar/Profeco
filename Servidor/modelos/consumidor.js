const mongoose = require("mongoose");

const esquemaConsumidor = new mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId, ref: "Usuario",
            required: true,
        },
        numeroTelefono: { type: String },
        mercadosFavoritos: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Mercado" },
        ],
        listaCompras: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
        ],
        listaDeseos: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
        ],
    },
    {
        versionKey: false,
    }
);

const Consumidor = mongoose.model("Consumidor", esquemaConsumidor);

module.exports = Consumidor;
