const jwtUtil = require('./jwtUtil')

function autenticarToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ mensaje: 'Token de autenticación no proporcionado' });
    }

    try {
        const usuario = jwtUtil.verificarToken(token);
        req.usuario = usuario;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Token de autenticación no válido' });
    }
}

module.exports = autenticarToken;