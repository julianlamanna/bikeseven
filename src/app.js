const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const session = require('express-session');
const sesionIniciadaMiddleware = require('./middlewares/sesionIniciada'); 
const userRouteMiddleware = require('./middlewares/userRouteMiddleware'); // 22-1 Juls
const loggedUserMiddleware = require('./middlewares/loggedUserMiddleware'); // 22-1 Juls


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false})); // recibe un objeto literal 
app.use(express.json()); // para ver los datos en el navegador

app.use(methodOverride('_method')); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(session( {secret: "May the force be with you!"})); 
app.use(sesionIniciadaMiddleware); 

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use(userRouteMiddleware); // 22-1 Juls
app.use(loggedUserMiddleware); // 22-1 Juls

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo // Puerto 3000");
})