require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path'); ///para la ruta de los archivos html
const personRoute = require('./routes/person') ///se jala el archivo de la ruta

app.use((req,res,next)=>{
    console.log(`${new Date().toString()} Ruta ${req.originalUrl}`)
    //res.send(`Ruta ${req.originalUrl}`)
    next();
})
app.use(personRoute);

//app.use(express.json)
app.use(express.static('public'))

//handler for 404
app.use((req,res,next)=>{  
    res.status(404).send(`Couldn't find the page ${req.originalUrl}`)
})

//handler for 500
app.use((err,req,res,next)=>{  
    console.error(err.stack);
    res.sendFile(path.join(__dirname,'./public/500.html'));

})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port: ${port}`)})


//console.log("hello world");