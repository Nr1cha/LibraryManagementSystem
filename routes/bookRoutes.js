const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    updateBook
} = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/', getAllBooks);

// POST request for creating Book.
router.post('/:id', updateBook);

module.exports = router;
