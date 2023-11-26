const express = require("express");
const usuarioControlador = require("../controladores/usuarioControlador");
const productoControlador = require("../controladores/productoControlador");
const consumidorControlador = require("../controladores/consumidorControlador");
const mercadoControlador = require("../controladores/mercadoControlador");
const notificacionControlador = require("../controladores/notificacionControlador");
const reporteControlador = require("../controladores/reporteControlador");
const generarRutas = require("./generadorRutas");
const profeCoControlador = require("../controladores/profeCoControlador");


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

const reporteRouter = generarRutas(reporteControlador);
routerPrincipal.use("/reportes", reporteRouter);

// Nuevas rutas específicas del Consumidor
routerPrincipal.post("/consumidores/verificar-ofertas", consumidorControlador.verificarOfertas);
routerPrincipal.post("/consumidores/buscar-productos", consumidorControlador.buscarProductos);
routerPrincipal.post("/consumidores/reportar-inconsistencia", consumidorControlador.reportarInconsistencia);
routerPrincipal.post("/consumidores/calificar-comentar-supermercado", consumidorControlador.calificarComentarSupermercado);
routerPrincipal.post("/consumidores/agregar-producto-wishlist", consumidorControlador.agregarProductoWishlist);

// Rutas adicionales de Producto
routerPrincipal.post("/productos/subir-precio", productoControlador.subirPrecio);
routerPrincipal.post("/productos/publicar-oferta", productoControlador.publicarOferta);

// Nuevas rutas específicas de Mercados
routerPrincipal.get("/mercados/reportes", mercadoControlador.obtenerReportes);
routerPrincipal.get("/mercados/reportes-inconsistencias", mercadoControlador.obtenerReportesInconsistencias);
routerPrincipal.post("/mercados/subir-precios-productos", mercadoControlador.subirPreciosProductos);
routerPrincipal.post("/mercados/publicar-ofertas", mercadoControlador.publicarOfertas);

// Nuevas rutas específicas de Notificaciones
routerPrincipal.post("/notificaciones/activar", notificacionControlador.activarNotificacion);

// Nuevas rutas específicas del ProFeCo
routerPrincipal.post("/profeco/generar-reportes", profeCoControlador.generarReportes);
routerPrincipal.post("/profeco/aplicar-castigo", profeCoControlador.aplicarMecanismoCastigo);

module.exports = routerPrincipal;
