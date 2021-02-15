const express = require('express');
const router = express.Router();
const Advertising = require('../database/models/Advertising');
//const Program = require('../database/models/Program');


// CREATE /api/advertisings
router.post('/', (req, res) => {
    Advertising.create({
        name: req.body.name,
        duration: req.body.duration        
    }).then(advertising => {
        res.json(advertising);
    }).catch(err => {
        res.json(err);
    })
});


// READ TODOS /api/advertisings
router.get('/', (req, res) => {
    Advertising.findAll({
        attributes: ['name', 'duration']
    }).then(advertisings => res.json(advertisings));
});


//READ una publicidad /api/advertisings/id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Advertising.findOne({
        attributes: ['name', 'duration'],
        where: {id}
    }).then(p=>{        
        res.json(p);
    });  
});

// UPDATE /api/advertisings/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    Advertising.update({
        name: req.body.name,
        duration: req.body.duration 
    },{
        where: {id}
    }).then(p => {
        res.json(p);
    });
});


// DELETE /api/advertisings/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Advertising.destroy({
        where: {
            id
        }
    }).then(p => {
        res.json(p);
    })
});


module.exports = router;