const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator'); 
let db = require('../database/models'); 

module.exports = {
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
    
    detail: function(req, res) {
        db.Productos.findByPk(req.params.id)
        .then(function(producto) {
            return res.render('detail', {
                producto: producto
            })
        })
    },    

    accesorios: function(req, res) {
        res.render('accesorios');        
    }, 

    create: function(req, res) {
        return res.render('createProduct'); 
    },

    save: function(req, res) {
        // req.body
        db.Productos.findOne({
            where: {
                title: req.body.title
            }
        })
        .then(function(elProducto) {
            if(elProducto == null) {
                db.Movie.create({
                    modelo: req.body.modelo,
                    descripciondestacada: req.body.descripciondestacada,
                    titulouno: req.body.titulouno
                })
                .then(function() {
                    res.redirect('/')
                })
            } else {
                res.send("Esta bicicleta ya existe")
            }
        })
    },
    
    edit: function(req, res) {
        db.Productos.findByPk(req.params.id)
        .then(function(producto) {
            res.render('productEdit', { producto : producto })
        })
    },
    
    update: function(req, res) {
        db.Productos.update({
            modelo: req.body.modelo,
            colores: req.body.colores
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(verQueOnda) {
            res.redirect('/productEdit/'+ req.params.id)
        })
    },

    delete: function(req, res) {
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(quePaso) {
            return res.send('Lo que me retorna es... ' + quePaso)
        })
        .catch(function(error) {
            return res.send(error)
        })
    }
    
    //async: function(req, res) {
    //    return res.render('movieAsync')
    //}    
}