const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

// POST request for creating Book.
router.post('/book', book_controller.book_create);

module.exports = router;
