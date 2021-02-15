const express = require('express');
const router = express.Router();
const Song = require('../database/models/Song');

// CREATE /api/songs
router.post('/', (req, res) => {
    Song.create({
        name: req.body.name,
        autor: req.body.autor,
        duration: req.body.duration        
    }).then(song => {
        res.json(song);
    }).catch(err => {
        res.json(err);
    })
});


// READ TODOS /api/songs
router.get('/', (req, res) => {
    Song.findAll({
        attributes: ['name','autor','duration']
    }).then(songs => res.json(songs));
});


//READ un songs /api/songs/id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Announcer.findOne({
        attributes: ['name','autor','duration'],
        where: {id}
    }).then(song=>{        
        res.json(song);
    });  
});

// UPDATE /api/songs/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    Announcer.update({
        name: req.body.name,
        autor: req.body.autor,
        duration: req.body.duration
    },{
        where: {id}
    }).then(song => {
        res.json(song);
    });
});


// DELETE /api/songs/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Announcer.destroy({
        where: {
            id
        }
    }).then(song => {
        res.json(song);
    })
});

module.exports = router;