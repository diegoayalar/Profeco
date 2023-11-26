const Producto = require("../modelos/producto");
const controladorGenerico = require("./controladorGenerico");

exports.obtenerTodos = async (req, res) => {
    await controladorGenerico.obtenerTodos(Producto, req, res);
};

exports.obtenerPorId = async (req, res) => {
    await controladorGenerico.obtenerPorId(Producto, req, res);
};

exports.crear = async (req, res) => {
    await controladorGenerico.crear(Producto, req, res);
};

exports.actualizar = async (req, res) => {
    await controladorGenerico.actualizar(Producto, req, res);
};

exports.eliminar = async (req, res) => {
    await controladorGenerico.eliminar(Producto, req, res);
};

exports.subirPrecio = async (req, res) => {
    try {
      const { productoId, nuevoPrecio } = req.body;
      const productoActualizado = await Producto.findByIdAndUpdate(
        productoId,
        { precio: nuevoPrecio },
        { new: true }
      );
  
      if (!productoActualizado) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
      }
  
      res.status(200).json(productoActualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al subir el precio del producto" });
    }
  };
  
  exports.publicarOferta = async (req, res) => {
    try {
      const { productoId, nuevaOferta } = req.body;
      const productoConOferta = await Producto.findByIdAndUpdate(
        productoId,
        { oferta: nuevaOferta },
        { new: true }
      );
  
      if (!productoConOferta) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
      }
  
      // Aquí puedes implementar la lógica para enviar notificaciones en tiempo real
  
      res.status(200).json(productoConOferta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Error al publicar la oferta del producto" });
    }
  };