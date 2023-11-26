const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

function generarToken(usuario) {
    const token = jwt.sign({ usuario }, secretKey, { expiresIn: '1h' });
    return token;
}

function verificarToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded.usuario;
    } catch (error) {
        throw new Error('Token no válido');
    }
}

module.exports = { generarToken, verificarToken };