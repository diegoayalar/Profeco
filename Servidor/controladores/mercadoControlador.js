const Mercado = require("../modelos/mercado");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
  await controladorGenerico.obtenerTodos(Mercado, req, res);
};

exports.obtenerPorId = async (req, res) => {
  await controladorGenerico.obtenerPorId(Mercado, req, res);
};

exports.crear = async (req, res) => {
  await controladorGenerico.crear(Mercado, req, res);
};

exports.actualizar = async (req, res) => {
  await controladorGenerico.actualizar(Mercado, req, res);
};

exports.eliminar = async (req, res) => {
  await controladorGenerico.eliminar(Mercado, req, res);
};

// Nueva función para subir los precios de los productos en un mercado
exports.subirPrecios = async (req, res) => {
  try {
    // Lógica para subir los precios de los productos en un mercado
    // Puedes recibir los datos necesarios desde req.body y realizar las operaciones correspondientes

    res.status(200).json({ mensaje: "Precios actualizados con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al subir los precios" });
  }
};

// Nueva función para publicar ofertas y enviar notificaciones en tiempo real a los consumidores
exports.publicarOfertas = async (req, res) => {
  try {
    // Lógica para publicar ofertas y enviar notificaciones
    // Puedes recibir los datos necesarios desde req.body y realizar las operaciones correspondientes

    res.status(200).json({ mensaje: "Ofertas publicadas con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al publicar ofertas" });
  }
};


exports.obtenerReportes = async (req, res) => {
  try {
      // Lógica para obtener reportes sobre comentarios y calificaciones de los clientes
      res.status(200).json({ mensaje: 'Reportes obtenidos con éxito' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener reportes' });
  }
};

exports.obtenerReportesInconsistencias = async (req, res) => {
  try {
      // Lógica para obtener reportes de inconsistencias y wishlists
      res.status(200).json({ mensaje: 'Reportes de inconsistencias obtenidos con éxito' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener reportes de inconsistencias' });
  }
};
