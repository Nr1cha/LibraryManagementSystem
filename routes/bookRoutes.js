const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    updateBook,
    getSingleBook,
    setSingleBook
} = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/', getAllBooks);

//GET single book
router.get("/:id", getSingleBook);

// POST request for creating Book.
router.post('/:id', updateBook);

//dummy put route
router.put('/create', setSingleBook);

//dummy delete route
router.delete('/:id', (req, res) => {
    res.status(405).send('Not Implemented')
});

module.exports = router;
