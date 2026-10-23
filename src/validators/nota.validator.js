const { body, validationResult } = require(\"express-validator\");

const validarCreacionNota = [
    body(\"titulo\").notEmpty().withMessage(\"El titulo es obligatorio\"),
    body(\"contenido\").notEmpty().withMessage(\"El contenido es obligatorio\"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];

module.exports = { validarCreacionNota };

