const express = require(\"express\");
const cookieParser = require(\"cookie-parser\");
const notaRoutes = require(\"./routes/nota.routes\");
const errorMiddleware = require(\"./middlewares/error.middleware\");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Rutas
app.use(\"/api/notas\", notaRoutes);

// Middleware de errores
app.use(errorMiddleware);

module.exports = app;

