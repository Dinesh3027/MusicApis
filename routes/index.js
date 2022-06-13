const express = require("express");
const db = require('../config/db');

const router = express.Router();

// Extract the randomised list of songs, 
// with associated artists
router.get("/songsListWithArtists/", (req, res) => {
    db.query('SELECT * FROM songs ORDER BY RANDOM() LIMIT $1',[4], (response) => {
        console.log(response);
        if(response.status === 0){
            res.json({status: 0, category:'songsListWithArtists', count: response.result.rowCount,  data: response.result.rows});
        } else {
            res.json({status: 1, category:'songsListWithArtists', error: response});            
        }
    });
});

// Retrieve information about a single specific song
router.get("/songInfoById/:id", (req, res) => {
    // For some more dynamic and beautify can write inner join query with the Artist Table
    // and can select specific
    var id = req.params.id;
    db.query('SELECT * FROM songs AS sg WHERE sg.id = $1 ;',[id], (response) => {
        console.log(response);
        if(response.status === 0){
            res.json({status: 0, category:'songInfoById', count: response.result.rowCount,  data: response.result.rows});
        } else {
            res.json({status: 1, category:'songInfoById', error: response});            
        }
    });
});

//update the information stored in the database
router.put("/modifySongByDescription/", (req, res) => {
    var info = req.body.info;
    const time = new Date().toISOString();
    db.query('UPDATE songs SET description=$1, modified = $3 WHERE id = $2 ;',[info.description, info.id, time], (response) => {
        console.log(response);
        if(response.status === 0){
            res.json({status: 0, category:'modifySongByDescription', count: response.result.rowCount,  data: response.result.rows});
        } else {
            res.json({status: 1, category:'modifySongByDescription', error: response});            
        }
    });
});

// Remove a song the listing from the database
router.delete("/removeASong/:id", (req, res) => {
    var id = req.params.id;
    db.query('DELETE FROM songs WHERE id = $1 ;',[id], (response) => {
        if(response.status === 0){
            res.json({status: 0, category:'removeASong', count: response.result.rowCount,  data: response.result.rows});
        } else {
            res.json({status: 1, category:'removeASong', error: response});            
        }
    });
});

module.exports = router;