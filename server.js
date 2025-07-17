const fs = require('fs');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const app = express();

// Helmet con opciones estrictas
app.use(helmet({
  contentSecurityPolicy: true,
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: { policy: "same-origin" },
  referrerPolicy: { policy: "no-referrer" }
}));

// CORS solo si lo necesitas
// app.use(cors({ origin: 'https://sumaq.com' }));

// Redirige HTTP a HTTPS (si tienes servidor HTTP en 80)
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

// Sirve archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Deshabilita el header 'x-powered-by'
app.disable('x-powered-by');

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).send('Error interno del servidor');
});

const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log('Servidor seguro iniciado en: https://localhost');
});