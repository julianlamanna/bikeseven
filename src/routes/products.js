// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const app = express();

router.get('/bicicletas', productsController.bicicletas);
router.get('/accesorios', productsController.accesorios);
router.get('/detalleDeProducto', productsController.detalleDeProducto);
/*router.get('/detalleDeProducto/:id', productsController.detalleDeProductoId);  ADDED by Juls 31-1*/

module.exports = router;