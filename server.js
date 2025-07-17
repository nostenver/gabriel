const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Deshabilita el header 'x-powered-by'
app.disable('x-powered-by');

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).send('Error interno del servidor');
});

// Opciones de HTTPS (debes tener privkey.pem y fullchain.pem en la raíz)
const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
};

// Inicia el servidor HTTPS en el puerto 443
https.createServer(options, app).listen(443, () => {
  console.log('Servidor seguro iniciado en: https://localhost');
});