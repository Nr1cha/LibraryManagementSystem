const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    updateBook,
    getSingleBook,
    setSingleBook,
    deleteSingleBook
} = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/', getAllBooks);

//GET single book
router.get("/:id", getSingleBook);

// POST request for creating Book.
router.post('/:id', updateBook);

//put route
router.put('/create', setSingleBook);

//delete route
router.delete('/:id', deleteSingleBook);

module.exports = router;
