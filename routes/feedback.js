const { json } = require('body-parser');
const express = require('express');
const router = express.Router();


const fs = require('fs')
// import data from feedback.json

const feedbackData = require('../data/feedback.json'); //node will convert to object

router.use(express.json())
router.use(express.urlencoded({extended: true}))

// display form
router.get('/feedback', (req, res)=>{
    res.render('feedback')
})

// get all of the messages from feedback.json
router.get('/api', (req, res)=>{
    res.json(feedbackData)
})

//submit a new message

router.post('/api', (req, res) => {
    //get data off of header
    let {name, title, message} = req.body

    // push object data to begining of array
    feedbackData.unshift(req.body)

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', err=>{
        if(err){
            res.status(423).send(err)
        }
    })

    //send backl all messages with new message attched
    res.json (feedbackData)
})

// console.log(feedbackData);

//delete message

module.exports = router;