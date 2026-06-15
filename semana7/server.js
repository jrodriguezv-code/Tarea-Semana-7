const express = require('express');
const app = express();

// Middleware obligatorio para procesar solicitudes en formato JSON
app.use(express.json());

// Array en memoria para almacenar temporalmente los reportes ciudadanos
let reportes = [];

// Ruta GET: Permite consultar todos los reportes registrados
app.get('/reportes', (req, res) => {
    res.json(reportes);
});

// Ruta POST: Permite registrar un nuevo reporte en la lista
app.post('/reportes', (req, res) => {
    const reporte = {
        id: reportes.length + 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion
    };
    
    // Guardamos el reporte dentro del Array
    reportes.push(reporte);
    
    // Respondemos confirmando el éxito de la operación
    res.json({
        mensaje: "Reporte registrado",
        reporte: reporte
    });
});

// El servidor escuchará en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});