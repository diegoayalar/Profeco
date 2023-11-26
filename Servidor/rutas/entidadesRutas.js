const express = require("express");
const usuarioControlador = require("../controladores/usuarioControlador");
const productoControlador = require("../controladores/productoControlador");
const consumidorControlador = require("../controladores/consumidorControlador");
const mercadoControlador = require("../controladores/mercadoControlador");
const notificacionControlador = require("../controladores/notificacionControlador");
const generarRutas = require("./generadorRutas");
const autenticarToken = require("../utilidades/authMiddleware");

const routerPrincipal = express.Router();

const usuarioRouter = generarRutas(usuarioControlador);

routerPrincipal.post("/usuarios/autenticar", usuarioControlador.autenticar);

routerPrincipal.use(autenticarToken);

routerPrincipal.use("/usuarios", usuarioRouter);
routerPrincipal.use("/productos", generarRutas(productoControlador));
routerPrincipal.use("/consumidores", generarRutas(consumidorControlador));
routerPrincipal.use("/mercados", generarRutas(mercadoControlador));
routerPrincipal.use("/notificaciones", generarRutas(notificacionControlador));

module.exports = routerPrincipal;