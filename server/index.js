const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database is kickin');
}).catch(err => {
    console.log('databas issue ====>', err)
})

const port = 4000
app.listen(port, () => console.log(`Listening on port ${port}`))