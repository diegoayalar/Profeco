const mongoose = require("mongoose");

const esquemaProducto = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true },
    tieneDescuento: { type: Boolean, default: false },
    precioDescuento: { type: Number, default: function() {
        return this.precio;
    }},
    oferta: { type: String, default: null },
    fechaCreacion: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const Producto = mongoose.model("Producto", esquemaProducto);

module.exports = Producto;
