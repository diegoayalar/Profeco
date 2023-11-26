const Consumidor = require("../modelos/consumidor");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Consumidor, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Consumidor, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Consumidor, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Consumidor, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Consumidor, req, res);
};

// Nuevas funciones específicas del Consumidor
exports.verificarOfertas = async (req, res) => {
    try {
      // Lógica para verificar ofertas (puedes consultar la base de datos o realizar otras acciones)
      res.status(200).json({ mensaje: 'Ofertas verificadas con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al verificar ofertas' });
    }
};

exports.buscarProductos = async (req, res) => {
    try {
      const { productoBuscado } = req.body;
      // Lógica para buscar productos (puedes consultar la base de datos u otros servicios)
      res.status(200).json({ resultados: ['Producto1', 'Producto2', 'Producto3'] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al buscar productos' });
    }
};

exports.guardarPreferencias = async (req, res) => {
    // Lógica para guardar preferencias
};

exports.reportarInconsistencia = async (req, res) => {
  try {
    // Lógica para recibir y procesar reportes de inconsistencias
    // Puedes recibir los datos necesarios desde req.body y realizar las operaciones correspondientes
    res.status(200).json({ mensaje: 'Reporte de inconsistencia registrado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar el reporte de inconsistencia' });
  }
};

exports.calificarComentarSupermercado = async (req, res) => {
  try {
    // Lógica para recibir y procesar calificaciones y comentarios
    // Puedes recibir los datos necesarios desde req.body y realizar las operaciones correspondientes
    res.status(200).json({ mensaje: 'Calificación y comentario registrados con éxito para el supermercado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar la calificación y comentario para el supermercado' });
  }
};

exports.agregarProductoWishlist = async (req, res) => {
    try {
      // Lógica para recibir y procesar productos en la Wishlist
      // Puedes recibir los datos necesarios desde req.body y realizar las operaciones correspondientes
      res.status(200).json({ mensaje: 'Producto añadido a la Wishlist con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al agregar el producto a la Wishlist' });
    }
};
