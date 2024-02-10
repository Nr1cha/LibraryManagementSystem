const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectToServer } = require("./db");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json


const bookRoutes = require("./routes/bookRoutes");
app.use('/books', bookRoutes);

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`);
// });

connectToServer((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    }
})