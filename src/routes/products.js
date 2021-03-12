// ENRUTADOR PRODUCTS
// RUTA ------> CONTROLADOR -------> VISTA
// const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
//const app = express();

router.get('/bicicletas', productsController.bicicletas);
router.get('/accesorios', productsController.accesorios);
/*router.get('/detalleDeProducto', productsController.detalleDeProducto);
/*router.get('/detalleDeProducto/:id', productsController.detalleDeProductoId);  ADDED by Juls 31-1*/

router.get('/create', productsController.create); // ----> Imprime el formulario
router.post('/create', productsController.save); // ----> Recibe los datos del formulario y hace algo con ellos`

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

router.get('/detail/:id', productsController.detail);

router.delete('/delete/:id', productsController.delete)

module.exports = router;