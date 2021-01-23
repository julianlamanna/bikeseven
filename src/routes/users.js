// MODULOS GLOBALES
const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();

// CONTROLADORES
const usersController = require('../controllers/usersController');

// MIDDLEWARES
const userRouteMiddleware = require('../middlewares/userRouteMiddleware'); 
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware'); 

// VALIDADORES
const usersValidator = require('../validators/users');

// MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/avatars'));
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '- SevenUp' + Date.now() + path.extname(file.originalname))
    }
  })
var upload = multer({ storage: storage })

router.get('/register', userRouteMiddleware, usersController.register);
router.post('/register', upload.single('avatar'), usersValidator.checkRegister, usersController.save);

router.get('/login', usersController.login); // 22-1 Jusl aca iria el Middleware
router.post('/login', loggedUserMiddleware, usersController.checkLogin); // 22-1 Jusl aca iria el Middleware

module.exports = router;