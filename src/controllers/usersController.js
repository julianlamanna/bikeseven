const fs = require ('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    register: function(req, res) {
        res.render('register')
    },

    save: function(req, res) {
        let errors = validationResult(req);
        
        if( errors.isEmpty() ) {
            // no hay errores. Vamos por acá...
            let nuevoUsuario = {
                name: req.body.name,
                /*apellido: req.body.apellido,*/
                email: req.body.email,
                avatar: req.file.filename,
                password: bcryptjs.hashSync(req.body.password, 12)
            }
            usuarios.push(nuevoUsuario)
            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(usuarios, null, 4));
            res.redirect('/')
            
        } else {
            // hay errores. Entonces...
            // res.send( validationResult(req).mapped() )
            return res.render('register', {
                errors: errors.mapped()
            })
        }
    },  

    login: function(req, res) {
        res.render('login');
    },

    welcome: function(req, res) {
        //res.send("Tu usuario ha sido creado con éxito");
        res.send(req.query); // recupero los datos que se enviaron a traves del metodo get
    },   

    delete: function(req, res) {
        res.send("Se borró un usuario");
    },
    
    checkLogin: function(req, res) {
        //return res.send(req.body)
        let emailUsuario = req.body.email;
        let passUsuario = req.body.password;

        for(let i = 0; i < usuarios.length; i++){
            if(emailUsuario == usuarios[i].email){
                if(bcryptjs.compareSync(passUsuario, usuarios[i].password) ){
                    // res.send("Bienvenido")
                    
                    // CREAMOS SESION DE USUARIOS
                    req.session.datosUsuario = {
                        email: usuarios[i].email,
                        name: usuarios[i].name,
                        avatar: usuarios[i].avatar
                    }
                } else {
                    res.send("Los datos ingresados no son correctos")
                }
            } else {
                res.send("Los datos ingresados no son correctos")
            }
        }

        // res.send(usuarios) chequear la base de datos de usuarios
    }    
}