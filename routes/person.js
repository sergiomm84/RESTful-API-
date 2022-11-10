const express = require('express');
const router = express.Router(); ///
/*
router.get('/person', (req,res) =>{
    //res.send('You have requested PERSON');
    res.send({param: "Hola"});

}) /// se define el nombre de la ruta

router.get('/person/:id', (req,res) =>{
    
    res.send(`Routes person con variable ${req.params.id}`);

}) /// se define el nombre de la ruta
*/
router.get('/person', (req,res) =>{
    if(req.query.id){
        res.send(`Routes person con variable ${req.query.id}`);
    }
    else{
        res.send({param: "Hola"});
    }
    

}) /// se define el nombre de la ruta


router.get('/person')
module.exports = router; ///exportar para poder usarlo en index.js