const mongoose = require("mongoose");
const mercado = require("./mercado");

const esquemaReporte = new mongoose.Schema(
  {
    mercado: { type: mongoose.Schema.Types.ObjectId, ref: "Mercado" },
    comentarios: [{ type: String }],
    calificaciones: [{ type: Number }],
    inconsistencias: [{ type: String }],
    wishlists: [{ type: String }],
  },
  {
    versionKey: false,
  }
);

const Reporte = mongoose.model("Reporte", esquemaReporte);

module.exports = Reporte;
