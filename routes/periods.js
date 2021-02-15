const express = require('express');
const router = express.Router();
const Period = require('../database/models/Period');
const Advertising = require('../database/models/Advertising');
const Song = require('../database/models/Song');

// CREATE /api/programs
router.post('/', (req, res) => {
    //const { name,schedule,duration,day,directorId,announcers } = req.body;
    Period.create({
        name: req.body.name,
        isAdvertising: req.body.isAdvertising,
        programaId:req.body.programaId
        }).then(period => {    
        res.json(period);
    }).catch(err => {
        res.json(err);
    })
});

// READ todos /api/programs/
router.get('/', (req, res) => {
    Period.findAll({
        include: [{
        model: Song,
        as: "songs",
        attributes: ['name']
    },{
        model: Advertising,
        as: 'advertisings',
        attributes:['name']
    }],
         attributes: ['id','name', 'isAdvertising']
    }).then(periods => res.json(periods));
});


//READ un periodo /api/periods/id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Period.findOne({
        include: [{
            model: Song,
            as: "songs",
            attributes: ['name']
        },{
            model: Advertising,
            as: 'advertisings',
            attributes:['name']
        }],
        where: {
           id
        }
    }).then(resp=>res.json(resp));  
});

// UPDATE /api/periods/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    Period.update({
        name: req.body.name,
        isAdvertising: req.body.isAdvertising,
        programaId:req.body.programaId
    },{
        where: {id}
    }).then(p => {
        res.json(p);
    });
});

// DELETE /api/periods/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Period.destroy({
        where: {
            id
        }
    }).then(result => {
        res.json(result);
    })
});

//--------------------------PERIODO-CANCION----------------------------

//AGREGAR UNA CANCION A PERIODO
router.put('/:id/addcancion', (req, res) => {
    Song.findByPk(req.body.id).then(song=>
    Period.findByPk(req.params.id).then(period => 
        period.addSongs(song).then(r=> res.json(r))));
});

//BORRAR UNA CANCION A PERIODO
router.put('/:id/removecancion', (req, res) => {
    Song.findByPk(req.body.id).then(song=>
        Period.findByPk(req.params.id).then(period => 
            period.removeAnnouncers(song).then(r=> res.json(r))));
});

//VERIFICAR SI CANCION ESTA EN PERIODO (RETURN boolean)
router.get('/:id/hascancion', (req, res) => {
    Song.findByPk(req.body.id).then(song=>
        Period.findByPk(req.params.id).then(period => 
            period.hasSong(song).then(r=>res.json(r))));
});


//-----------------PERIODO-PUBLICIDAD------------------------------

//AGREGAR PUBLICIDAD A PERIODO
router.put('/:id/addpublicidad', (req, res) => {
    Advertising.findByPk(req.body.id).then(advertising=>
    Period.findByPk(req.params.id).then(period => 
        period.addAdvertisings(advertising).then(res.json(r=>res.json(r)))));
});

//BORRAR PUBLICIDAD DE PERIODO
router.put('/:id/removepublicidad', (req, res) => {
    Advertising.findByPk(req.body.id).then(advertising=>
        Period.findByPk(req.params.id).then(period => 
            period.removeAdvertisings(advertising).then(r=>res.json(r))));
});

//VERIFICAR SI PUBLICIDAD ESTA EN PERIODO (RETURN boolean)
router.get('/:id/haspublicidad', (req, res) => {
    Advertising.findByPk(req.body.id).then(advertising=>
        Period.findByPk(req.params.id).then(period => 
            period.hasAdvertising(advertising).then(r=>res.json(r))));
});

module.exports = router;