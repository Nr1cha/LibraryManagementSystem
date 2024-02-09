const express = require('express');
const app = express();
const port = 3000;
const bookRoutes = require('./routes/bookRoutes');


app.use(express.json()); // for parsing application/json


app.get('/', bookRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});