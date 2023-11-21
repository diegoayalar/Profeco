const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const conectarDB = require('./db');
const entidadesRutas = require("./rutas/entidadesRutas.js");

dotenv.config({ path: "./config.env" });

const app = express();

conectarDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas API
app.use("/api", entidadesRutas);

// Puerto en el que escucha el servidor
const puerto = process.env.PORT;
app.listen(puerto, () => {
    console.log(`Server is running on port ${puerto}`);
});
