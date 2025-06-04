const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// POST /api/libros → Añadir un libro
router.post('/', librosController.addBook);

// (Opcional futuro) GET /api/libros → Listar todos
// router.get('/', librosController.getAllBooks);

module.exports = router;
