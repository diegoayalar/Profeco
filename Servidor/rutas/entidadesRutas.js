const express = require("express");
const usuarioControlador = require("../controladores/usuarioControlador");
const productoControlador = require("../controladores/productoControlador");
const consumidorControlador = require("../controladores/consumidorControlador");
const mercadoControlador = require("../controladores/mercadoControlador");
const notificacionControlador = require("../controladores/notificacionControlador");
const generarRutas = require("./generadorRutas");

const routerPrincipal = express.Router();

const usuarioRouter = generarRutas(usuarioControlador);
routerPrincipal.use("/usuarios", usuarioRouter);

const productoRouter = generarRutas(productoControlador);
routerPrincipal.use("/productos", productoRouter);

const consumidorRouter = generarRutas(consumidorControlador);
routerPrincipal.use("/consumidores", consumidorRouter);

const mercadoRouter = generarRutas(mercadoControlador);
routerPrincipal.use("/mercados", mercadoRouter);

const notificacionRouter = generarRutas(notificacionControlador);
routerPrincipal.use("/notificaciones", notificacionRouter);

module.exports = routerPrincipal;