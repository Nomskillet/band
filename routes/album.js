

// const express = require('express');
// const router = express.Router();

// //import data
// const dataFile = require('../data/data.json')

// let gybeAlbum = dataFile.albums
// // console.log(gybeAlbum);


// router.get('/album', (req, res) =>{

    

//     res.render('albums', {
//         gybeAlbum: gybeAlbum
//     })
// })


// router.get(`/album/:shortname`, (req, res)=>{

//     let shortName = req.params.shortname
//     let albumName = [];
//     let photos = [];

//     gybeAlbum.forEach(gybeObj =>{
//         if (gybeObj.shortname == shortName){
//             albumName.push(gybeObj)
//             photos = gybeObj.artwork
//         }
//     })
    
//     res.render('albumPage',{
//         artwork: photos,
//         albumname: albumName
//     })
//     console.log(albumName);
// })

// module.exports = router;





const express = require(`express`);
const router = express.Router();

//import data to this file from the json file
let dataFile = require(`../data/data.json`)

let albums = dataFile.albums;
// console.log(albums);

router.get(`/album`, (req, res)=>{

    res.render(`albums`, {
        albums: albums
    })
})

router.get(`/albums/:shortname`, (req, res) => {
    let shortname = req.params.shortname
    let albumName = [];
    let photos = [];
    albums.forEach(albumsObject=>{
        if(albumsObject.shortname == shortname){
            albumName.push(albumsObject)
            photos = albumsObject.artwork
        }
    })
    res.render('albumPage',{
        artwork: photos,
        albumName: albumName
        
    })
    //double checking that the album name is coming in from the url with this console log. next I'll build a forEach loop
    console.log(albumName);
    
})

module.exports = router;