require('dotenv').config();

const express = require('express');
const app = express();

const personRoute = require('./routes/person') ///se jala el archivo de la ruta

app.use((req,res,next)=>{
    console.log(`${new Date().toString()} Ruta ${req.originalUrl}`)
    //res.send(`Ruta ${req.originalUrl}`)
    next();
})
app.use(personRoute);

//app.use(express.json)
app.use(express.static('public'))


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port: ${port}`)})


//console.log("hello world");