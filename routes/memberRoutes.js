const express = require('express');
const router = express.Router();
const {
    getAllMembers,
    updateMember,
    getSingleMember,
    setSingleMember,
    deleteSingleMember
} = require('../controllers/memberController');
const { bookIdSchema,
    validateBookPost
} = require('../middleware/validation');

// GET request for list of all Member items.
router.get('/', getAllMembers);

//GET single book
router.get("/:id", bookIdSchema, getSingleMember);

// POST request for creating Member.
router.post('/:id', validateBookPost, updateMember);

//put route
router.put('/create', validateBookPost, setSingleMember);

//delete route
router.delete('/:id', bookIdSchema, deleteSingleMember);

module.exports = router;
