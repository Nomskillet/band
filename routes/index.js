

const express = require('express');
const router = express.Router();

//import data
const dataFile = require('../data/data.json')


router.get('/', (req, res) =>{
    res.render('index')
})

module.exports = router;