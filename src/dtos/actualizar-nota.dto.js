class ActualizarNotaDto {
    constructor({ titulo, contenido }) {
        if (titulo) this.titulo = titulo;
        if (contenido) this.contenido = contenido;
    }
}

module.exports = ActualizarNotaDto;

