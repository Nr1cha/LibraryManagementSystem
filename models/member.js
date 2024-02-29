const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

//get all books
async function getAllMembersModel() {
    const db = await getDb();
    return db.collection("member").find().toArray();
};

//get single book
async function getSingleMemberModel(id) {
    const db = await getDb();
    return db.collection("member").find({ "_id": new ObjectId(id) }).toArray();
};

//post function
async function updateMemberModel(id, payload = {}) {
    const db = await getDb();
    return db.collection("member").updateOne(
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


// put function for book
async function setSingleMemberModel(payload = {}) {
    const db = await getDb();

    return db.collection("member").insertOne(
        {
            Title: payload.Title,
            Author: payload.Author,
            Genre: payload.Genre,
            Publisher: payload.Publisher,
            ISBN: payload.ISBN,
            PublishedYear: payload.PublishedYear,
            AvailabilityStatus: payload.AvailabilityStatus
        }
    )
};



// delete funtion
async function deleteSingleMemberModel(id) {
    const db = await getDb();

    return db.collection("member").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllMembersModel, updateMemberModel, getSingleMemberModel, setSingleMemberModel, deleteSingleMemberModel };