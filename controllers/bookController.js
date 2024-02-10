const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

//get a list of all books
exports.book_list = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("LibraryManagementSystem");
        dbo.collection("Book").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
};

//create a book
exports.book_create = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("LibraryManagementSystem");
        const book = { name: req.body.name, author: req.body.author };
        dbo.collection("Book").insertOne(book, function (err, result) {
            if (err) throw err;
            res.send('Book Created successfully');
            db.close();
        });
    });
};
