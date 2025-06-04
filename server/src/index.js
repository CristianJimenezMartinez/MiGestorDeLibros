// src/index.js
const express = require('express');
const dotenv = require('dotenv');
const librosRoutes = require('./routes/librosRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en el body
app.use(express.json());

// Rutas: todo lo que empiece /api/libros → librosRoutes
app.use('/api/libros', librosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Gestor de Libros funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});
