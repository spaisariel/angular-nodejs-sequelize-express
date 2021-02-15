const express = require('express');
const router = express.Router();
const Director = require('../database/models/Director');
const Program = require('../database/models/Program');


// CREATE /api/directors
router.post('/', (req, res) => {
    Director.create({
        name: req.body.name,
        email: req.body.email,
        dni: req.body.dni  
        
    }).then(director => {
        res.json(director);
    }).catch(err => {
        res.json(err);
    })
});


// READ TODOS /api/directors
router.get('/', (req, res) => {
    Director.findAll({
        include: [{
            model: Program,
            as: "programs",
            attributes: ['name']
        }],
        attributes: ['name', 'dni','email']
    }).then(directors => res.json(directors));
});


//READ un director /api/directors/id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Director.findOne({
        include: [{
            model: Program,
            as: "programs",
            attributes: ['name']
        }],
        where: {
           id
        }
    }).then(resp=>{
        
        res.json(resp);

    });  
});

// UPDATE /api/directors/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    Director.update({
        name: req.body.name,
        email: req.body.email,
        dni: req.body.dni  
    },{
        where: {id}
    }).then(director => {
        res.json(director);
    });
});


// DELETE /api/directors/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Director.destroy({
        where: {
            id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;