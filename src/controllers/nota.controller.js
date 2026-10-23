const notaService = require(\"../services/nota.service\");

class NotaController {
    async listar(req, res, next) {
        try {
            const notas = await notaService.obtenerNotas();
            res.json({ success: true, data: notas });
        } catch (error) {
            next(error);
        }
    }

    async crear(req, res, next) {
        try {
            const nuevaNota = await notaService.crearNota(req.body);
            res.status(201).json({ success: true, data: nuevaNota });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new NotaController();

