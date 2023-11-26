const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const validator = require('validator');

const esquemaUsuario = new mongoose.Schema(
    {
        nombre: { 
            type: String, 
            required: [true, 'Por favor, proporciona un nombre.'],
            unique: [true, 'Este nombre ya está en uso.']
        },
        correoElectronico: { 
            type: String, 
            required: [true, 'Por favor, proporciona una dirección de correo electrónico.'], 
            unique: [true, 'Esta dirección de correo electrónico ya está registrada.'],
            validate: {
                validator: function (value) {
                    return validator.isEmail(value);
                },
                message: 'Por favor, introduce una dirección de correo electrónico válida.'
            }
        },
        contrasena: {
            type: String,
            required: [true, 'Por favor, proporciona una contraseña.'],
            validate: {
                validator: function (value) {
                    return value.length >= 8;
                },
                message: 'La contraseña debe tener al menos 8 caracteres.'
            }
        },
        rol: {
            type: String,
            enum: {
                values: ["Consumidor", "Mercado", "Profeco"],
                message: 'El rol debe ser uno de: Consumidor, Mercado, Profeco.'
            },
            default: "Consumidor",
            required: [true, 'Por favor, proporciona un rol.'],
        },
        fechaCreacion: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
    }
);

esquemaUsuario.pre('save', async function (next) {
    const usuario = this;
    if (!usuario.isModified('contrasena')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(usuario.contrasena, salt);
    usuario.contrasena = hash;
    next();
});

const usuario = mongoose.model("Usuario", esquemaUsuario);

module.exports = usuario;