const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewars
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})); //Permite entender datos sencillos que vienen en inputs
app.use(express.json()); //Permite entender archivos formatos JSON

// ruta
app.use('/api/libros', require('./libros'))

app.listen(app.get('port'), () =>{
 console.log(`Server on port ${app.get('port')}`);

})