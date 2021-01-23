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
        
        // El registro, ¿llegó con errores? Preguntamos con el IF
        if( errors.isEmpty() ) {
            // no hay errores. Vamos por acá...
            let nuevoUsuario = {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                avatar: req.file.filename,
                password: bcryptjs.hashSync(req.body.password, 12)
            }
            usuarios.push(nuevoUsuario)
            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(usuarios, null, 4));
            res.redirect('/')
            
        } else {
            // hay errores. Entonces...
            //return console.log(errors);
            return res.render('register', { errors: errors.mapped() })
        }
    },  

    welcome: function(req, res) {
        //res.send("Tu usuario ha sido creado con éxito");
        return res.send(req.query); // recupero los datos que se enviaron a traves del metodo get
    },   

    delete: function(req, res) {
        return res.send("Se borró un usuario");
    },
    
    login: function(req, res) {
        return res.render('login');
    },    
    checkLogin: function(req, res) {
        let emailUsuario = req.body.email; 
        let passUsuario = req.body.password; 
        
        for(let i = 0; i < usuarios.length; i++) {
            // chequea toda la tabla
            if(emailUsuario == usuarios[i].email) {
                 
                // compara la password hasheada
                 if ( bcryptjs.compareSync(passUsuario, usuarios[i].password) ) {
                    req.session.datosUsuario = {
                        name: usuarios[i].name,
                        email: usuarios[i].email,
                        avatar: usuarios[i].avatar 
                    }; 
                    let usuarioLogueado = req.session;
                    res.redirect('/users/login');
                    //res.render('index', { title: 'prueba' });
                } else {
                    return res.send("Los datos ingresados no son correctos")
                } 
            } 
        } return res.send("No existe un usuario registrado con este email"); 
    }    
}