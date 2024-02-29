const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/";
const { getAllMemberModel, updateMemberModel, getSingleMemberModel, setSingleMemberModel, deleteSingleMemberModel } = require("../models/book");

//get a list of all books
async function getAllMembers(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const bookCollection = await getAllMembersModel();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(bookCollection);
    } catch (err) {
        next(err);
    }
}

//get a single book
async function getSingleMember(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const singleMember = await getSingleMemberModel(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleMember);
    } catch (err) {
        next(err);
    }
}

//post logic
async function updateMember(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                Title: 'Title',
                Author: 'Author',
                Genre: 'Genre',
                Publisher: 'Publisher',
                ISBN: 12345,
                PublishedYear: 1998,
                AvailabilityStatus: 'AvailabilityStatus'
        }
    } 
    */
        const payload = req.body;
        const response = await updateMemberModel(req.params.id, payload);
        res.setHeader('Content-Type', 'application/json');
        if (response.acknowledged) {
            res.status(201).json({
                updated: true
            });
        } else {
            res.status(500).json(response.err || 'Some error occurred while creating the book entry.');
        }
    } catch (err) {
        next(err)
    }
}

// adding put logic
async function setSingleMember(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
            schema: {
                    Title: 'Title',
                    Author: 'Author',
                    Genre: 'Genre',
                    Publisher: 'Publisher',
                    ISBN: 12345,
                    PublishedYear: 1988,
                    AvailabilityStatus: 'AvailabilityStatus'
            }
    } 
    */
        const payload = req.body;
        const response = await setSingleMemberModel(payload);
        res.setHeader('Content-Type', 'application/json');
        if (response.acknowledged) {
            res.status(204).json({
                updated: true
            });
        } else {
            console.log(response)
            res.status(500).json(response.error || 'Some error occurred while creating the book.');
        }
    } catch (err) {
        next(err)
    }
}

// delete logic
async function deleteSingleMember(req, res, next) {
    try {
        const singleMember = await deleteSingleMemberModel(req.params.id);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleMember);
    }
    catch (err) {
        next(err);
    }
}

module.exports = { getAllMembers, updateMember, getSingleMember, setSingleMember, deleteSingleMember };