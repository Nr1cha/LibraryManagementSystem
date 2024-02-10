const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all books
async function getAllBooksModel() {
    const db = await getDb();
    return db.collection("Book").find().toArray();
};

//post function
async function updateBookModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("Book").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                Title: payload.Title,
                Author: payload.Author,
                Genre: payload.Genre,
                Publisher: payload.Publisher,
                ISBN: payload.ISBN,
                PublishedYear: payload.PublishedYear,
                AvailabilityStatus: payload.AvailabilityStatus
            }
        }
    )
}

module.exports = { getAllBooksModel, updateBookModel };