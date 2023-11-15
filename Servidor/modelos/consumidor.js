const mongoose = require("mongoose");
const usuario = require("./usuario");

const esquemaConsumidor = new mongoose.Schema({
    usuario: {
        type: usuario.esquema,
        required: true,
    },
    numeroTelefono: { type: String },
    mercadosFavoritos: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Mercado" },
    ],
    listaCompras: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
    listaDeseos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
});

const Consumidor = mongoose.model("Consumidor", esquemaConsumidor);

module.exports = Consumidor;
