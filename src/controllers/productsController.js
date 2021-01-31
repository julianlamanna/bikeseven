const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator'); 
let db = require('../database/models'); 

module.exports = {
    /*bicicletas: function(req, res) {
        res.render('bicicletas', {products});        
    },*/

    bicicletas: function(req, res) {
        //db.sequelize.query('SELECT * FROM productos')
        db.Productos.findAll()
        .then(function(productos){
                res.render('bicicletas',{
                    productos:productos
                });
            }
        )
    },         

    detalleDeProducto: function(req, res) {
        res.render('detalleDeProducto');        
    },    

    /*detalleDeProductoId: function ('/products/detalleDeProducto/:idProducto', function(req, res){ 
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: 'detalleDeEsteProducto'}]
        })
        .then(function(unProducto) {
            res.render('detalleDeProducto', {
                unProducto: unProducto
            })
        })       
    },  ADDED by Juls 31-1 */    

    accesorios: function(req, res) {
        res.render('accesorios');        
    }, 
    create: function(req, res) {
        return res.render('createProduct'); 
    }
}