const mongoose = require("mongoose");

const esquemaUsuario = new mongoose.Schema(
    {
        nombre: { type: String, required: true, unique: true },
        correoElectronico: { type: String, required: true, unique: true },
        contrasena: { type: String, required: true },
        rol: {
            type: String,
            enum: ["Consumidor", "Mercado", "Profeco"],
            default: "Consumidor",
            required: true,
        },
        fechaCreacion: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
    }
);

const usuario = mongoose.model("Usuario", esquemaUsuario);

module.exports = usuario;
