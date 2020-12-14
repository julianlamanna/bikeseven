const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mainRouter = require('./routes/main');
//const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false})); // recibe un objeto literal 
app.use(express.json()); // para ver los datos en el navegador
app.use(methodOverride('_method')); 
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})