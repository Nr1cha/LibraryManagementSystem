const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    updateBook,
    getSingleBook
} = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/', getAllBooks);

//GET single book
router.get("/:id", getSingleBook);

// POST request for creating Book.
router.post('/:id', updateBook);

//dummy put route
router.put('/create', (req, res) => {
    /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                Title: 'Title',
                Author: 'Author',
                Genre: 'Genre',
                Publisher: 'Publisher',
                ISBN: 'ISBN',
                PublishedYear: 'PublishedYear',
                AvailabilityStatus: 'AvailabilityStatus'
        }
    } 
    */
    res.status(405).send('Not Implemented')
});

//dummy delete route
router.delete('/:id', (req, res) => {
    res.status(405).send('Not Implemented')
});

module.exports = router;
