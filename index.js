require('dotenv').config();

const express = require('express');
const app = express();

const personRoute = require('./routes/person')
app.use(personRoute);

//app.use(express.json)
app.use(express.static('public'))


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port: ${port}`)})


//console.log("hello world");