const mongoose = require("mongoose");
const usuario = require("./usuario");

const esquemaConsumidor = new mongoose.Schema(
    {
        usuario: {
            type: usuario.schema,
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
        preferenciasPersonales: [
            {
                producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
                cantidad: { type: Number, default: 1 },
            },
        ],
        reportes: [
            {
                tipo: { type: String, enum: ["inconsistencia", "calificacion", "comentario"] },
                supermercado: { type: mongoose.Schema.Types.ObjectId, ref: "Mercado" },
                detalle: { type: String },
            },
        ],
    },
    {
        versionKey: false,
    }
);

const Consumidor = mongoose.model("Consumidor", esquemaConsumidor);

module.exports = Consumidor;
