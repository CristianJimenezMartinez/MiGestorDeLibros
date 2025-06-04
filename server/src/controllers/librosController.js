// src/controllers/librosController.js
const pool = require('../db');

// Función que añade un libro a la tabla "books"
exports.addBook = async (req, res) => {
  try {
    const { title, author, year, note } = req.body;

    if (!title || !author) {
      return res.status(400).json({ error: 'Título y autor son obligatorios.' });
    }

    const queryText = `
      INSERT INTO books (title, author, year, note)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [title, author, year || null, note || null];
    
    const result = await pool.query(queryText, values);
    const newBook = result.rows[0];

    return res.status(201).json(newBook);
  } catch (error) {
    console.error('Error al añadir libro:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
