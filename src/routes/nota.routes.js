const { Router } = require(\"express\");
const notaController = require(\"../controllers/nota.controller\");
const { validarCreacionNota } = require(\"../validators/nota.validator\");

const router = Router();

router.get(\"/\", notaController.listar);
router.post(\"/\", validarCreacionNota, notaController.crear);

module.exports = router;

