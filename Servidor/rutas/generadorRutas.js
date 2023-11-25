const express = require("express");

function generarRutas(controlador) {
    const router = express.Router();

    router.route("/").get(controlador.obtenerTodos).post(controlador.crear);

    router
        .route("/:id")
        .get(controlador.obtenerPorId)
        .put(controlador.actualizar)
        .delete(controlador.eliminar);

    return router;
}

module.exports = generarRutas;
