const pool = require(\"../models/nota.model\");

class NotaService {
    async obtenerNotas() {
        const [rows] = await pool.query(\"SELECT * FROM notas\");
        return rows;
    }

    async crearNota(data) {
        const { titulo, contenido } = data;
        const [result] = await pool.query(\"INSERT INTO notas (titulo, contenido) VALUES (?, ?)\", [titulo, contenido]);
        return { id: result.insertId, titulo, contenido };
    }
}

module.exports = new NotaService();

