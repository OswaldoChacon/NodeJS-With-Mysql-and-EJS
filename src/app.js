const express = require('express');
const path = require('path')
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection')
const app = express();

const customerRoutes = require('./routes/customers')

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port:'3306',
    database:'crudnodejsmysql'
},'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server to port 3000');
});