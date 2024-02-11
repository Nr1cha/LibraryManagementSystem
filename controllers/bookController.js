const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/";
const { getAllBooksModel, updateBookModel, getSingleBookModel } = require("../models/book");

//get a list of all books
async function getAllBooks(req, res) {
    const bookCollection = await getAllBooksModel();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(bookCollection);
}

//get a single book
async function getSingleBook(req, res) {
    const singleBook = await getSingleBookModel(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(singleBook);
}

// exports.book_list = function (req, res) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         const dbo = db.db("LibraryManagementSystem");
//         dbo.collection("Book").find({}).toArray(function (err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//         });
//     });
// };

//post logic
async function updateBook(req, res) {
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
    const payload = req.body;
    const response = await updateBookModel(req.params.id, payload);
    res.setHeader('Content-Type', 'application/json');
    if (response.acknowledged) {
        res.status(201).json({
            updated: true
        });
    } else {
        res.status(500).json(response.err || 'Some error occurred while creating the book entry.');
    }
}

// exports.book_create = function (req, res) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         const dbo = db.db("LibraryManagementSystem");
//         const book = { name: req.body.name, author: req.body.author };
//         dbo.collection("Book").insertOne(book, function (err, result) {
//             if (err) throw err;
//             res.send('Book Created successfully');
//             db.close();
//         });
//     });
// };

module.exports = { getAllBooks, updateBook, getSingleBook };