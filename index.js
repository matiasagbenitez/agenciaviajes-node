import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG (motor de plantillas)
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    return next();
});

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router);

// Ruta principal
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});