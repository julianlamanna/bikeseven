const { check } = require('express-validator');

module.exports = {
    checkRegister: [
        check('name')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength( {min: 6, max: 30} ).withMessage('Tu nombre debe tener como mínimo 6 caracteres y como máximo 30'),
        check('lastname')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength( {min: 6, max: 30} ).withMessage('Tu apellido debe tener como mínimo 6 caracteres y como máximo 30'),            
        check('email')
            .isEmail()
            .withMessage('Tenés que poner un email válido'),
        check('password')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength( {min: 6, max: 12} ).withMessage('Tu password debe tener como mínimo 6 caracteres y como máximo 12'),
                    
    ],
    checkLogin: null
}