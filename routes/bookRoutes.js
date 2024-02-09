// routes/bookRoutes.js

var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

// POST request for creating Book.
router.post('/book', book_controller.book_create);

module.exports = router;
