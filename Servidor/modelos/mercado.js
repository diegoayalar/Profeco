const mongoose = require("mongoose");

const esquemaMercado = new mongoose.Schema(
    {
        usuarioId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Usuario",
            required: true,
        },
        productosIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
        notificaciones: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Notificacion" },
        ],
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

esquemaMercado.virtual("usuario", {
    ref: "Usuario",
    localField: "usuarioId",
    foreignField: "_id",
    justOne: true,
  });

  esquemaMercado.virtual("productos", {
    ref: "Producto",
    localField: "productosIds",
    foreignField: "_id",
  });

const mercado = mongoose.model("Mercado", esquemaMercado);

module.exports = mercado;
