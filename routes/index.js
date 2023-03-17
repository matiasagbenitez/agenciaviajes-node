import express from 'express';

const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

router.get('/contacto', (req, res) => {
    res.send('Contacto');
});

export default router;