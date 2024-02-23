const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectToServer } = require("./db");
const bodyParser = require("body-parser");
const routes = require('./routes');
const cors = require('cors');
const { auth } = require('express-openid-connect');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use('/', routes)

//error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
});

//Oauth
app.use(
    auth({
        issuerBaseURL: 'https://YOUR_DOMAIN',
        baseURL: 'https://YOUR_APPLICATION_ROOT_URL',
        clientID: 'YOUR_CLIENT_ID',
        secret: 'LONG_RANDOM_STRING',
        idpLogout: true,
    })
);

connectToServer((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    }
})