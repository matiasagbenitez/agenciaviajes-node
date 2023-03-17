import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG (motor de plantillas)
app.set('view engine', 'pug');

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router);

// Ruta principal
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});