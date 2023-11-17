exports.obtenerTodos = async (Modelo, req, res) => {
    try {
        const entidades = await Modelo.find();
        res.json(entidades);
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al obtener entidades: ${error.message}`,
        });
    }
};

exports.obtenerPorId = async (Modelo, req, res) => {
    const { id } = req.params;
    try {
        const entidad = await Modelo.findById(id);
        if (!entidad) {
            return res.status(404).json({ mensaje: `${Modelo.modelName} no encontrado` });
        }
        res.json(entidad);
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al obtener ${Modelo.modelName}: ${error.message}`,
        });
    }
};

exports.crear = async (Modelo, req, res) => {
    try {
        const nuevaEntidad = await Modelo.create(req.body);
        res.status(201).json({
            mensaje: `${Modelo.modelName} creado exitosamente`,
            entidad: nuevaEntidad,
        });
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al crear ${Modelo.modelName}: ${error.message}`,
        });
    }
};

exports.actualizar = async (Modelo, req, res) => {
    const { id } = req.params;
    try {
        const entidadActualizada = await Modelo.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!entidadActualizada) {
            return res.status(404).json({ mensaje: `${Modelo.modelName} no encontrado` });
        }
        res.json({
            mensaje: `${Modelo.modelName} actualizado exitosamente`,
            entidad: entidadActualizada,
        });
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al actualizar ${Modelo.modelName}: ${error.message}`,
        });
    }
};

exports.eliminar = async (Modelo, req, res) => {
    const { id } = req.params;
    try {
        const entidadEliminada = await Modelo.findByIdAndDelete(id);
        if (!entidadEliminada) {
            return res.status(404).json({ mensaje: `${Modelo.modelName} no encontrado` });
        }
        res.json({
            mensaje: `${Modelo.modelName} eliminado exitosamente`,
            entidad: entidadEliminada,
        });
    } catch (error) {
        res.status(500).json({
            mensaje: `Error al eliminar ${Modelo.modelName}: ${error.message}`,
        });
    }
};