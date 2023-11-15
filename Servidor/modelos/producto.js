const mongoose = require("mongoose");

const esquemaProducto = new mongoose.Schema({
    nombre: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true },
    conDescuento: { type: Boolean, default: false },
    precioConDescuento: { type: Number, default: 0 },
    fechaCreacion: { type: Date, default: Date.now },
});

const producto = mongoose.model("Producto", esquemaProducto);

module.exports = producto;
