const mongoose = require("mongoose");
const usuario = require("./usuario");

const esquemaMercado = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    usuario: {
      type: usuario.schema,
      required: true,
    },
    productos: [
      {
        producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
        precio: { type: Number, required: true },
      }
    ],
    notificaciones: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notificacion" },
    ],
  },
  {
    versionKey: false,
    timestamps: true, // Agregamos timestamps para el registro de la fecha de creación y modificación
  }
);

const Mercado = mongoose.model("Mercado", esquemaMercado);

module.exports = Mercado;
