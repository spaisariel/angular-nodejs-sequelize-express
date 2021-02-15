const express = require('express');
const router = express.Router();
const Period = require('../database/models/Period');
const Director = require('../database/models/Director');
const Program = require('../database/models/Program');
const Announcer = require('../database/models/Announcer');

// CREATE /api/programs
router.post('/', (req, res) => {
    //const { name,schedule,duration,day,directorId,announcers } = req.body;
    Program.create({
        name: req.body.name,
        schedule: req.body.schedule,
        duration: req.body.duration,
        day: req.body.day,
        directorId: req.body.directorId
        }).then(program => {    
        res.json(program);
    }).catch(err => {
        res.json(err);
    })
});

// READ todos /api/programs/
router.get('/', (req, res) => {
    Program.findAll({
        include: [{
            model: Director,
            as: "director",
            attributes: ['name']
        },{
            model: Announcer,
            as: 'announcers',
            attributes:['name']
        },
        {
            model: Period,
            as: "periodos",
            attributes: ['name']
        }],
        attributes: ['id','name', 'schedule','duration','day']
    }).then(programs => res.json(programs));
});

//DEVUELVE TODOS LOS PROGRAMAS DE UN DIA
// READ todos /api/programs/
router.get('/:dia/programaspordia', (req, res) => {
    const { dia } = req.params;
    console.log(dia);
    Program.findAll({
        include: [{
            model: Director,
            as: "director",
            attributes: ['name']
        },{
            model: Announcer,
            as: 'announcers',
            attributes:['name']
        },
        {
            model: Period,
            as: "periodos",
            attributes: ['name']
        }],
        attributes: ['id','name', 'schedule','duration','day']
        ,
        where:{
            day:dia
        }
    }).then(programs => res.json(programs));
});



/* //ejemplo para varios dias de la semana.
router.get('/', (req, res) => {
    Program.findAll({
        include: [{
            model: Director,
            as: "director",
            attributes: ['name']
        },{
            model: Announcer,
            as: 'announcers',
            attributes:['name']
        },
        {
            model: Period,
            as: "periodos",
            attributes: ['name']
        }],
        attributes: ['id','name', 'schedule','duration','day'],where{dayLunes=true }
    }).then(directors => res.json(directors));
});*/

//READ un programa /api/programs/id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Program.findOne({
        include: [{
            model: Director,
            as: "director",
            attributes: ['name']
        },{
            model:Announcer,
            as:'announcers',
            attributes: ['name']
        }],
        where: {
           id
        }
    }).then(resp=>res.json(resp));  
});

// UPDATE /api/programs/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    Program.update({
        name: req.body.name,
        schedule: req.body.schedule,
        duration: req.body.duration,
        day: req.body.day,
        directorId: req.body.directorId
    },{
        where: {id}
    }).then(program => {
        res.json(program);
    });
});

// DELETE /api/programs/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Program.destroy({
        where: {
            id
        }
    }).then(result => {
        res.json(result);
    })
});

//AGREGAR LOCUTOR DE PROGRAMA
router.put('/:id/addlocutor', (req, res) => {
    Announcer.findByPk(req.body.id).then(announcer=>
    Program.findByPk(req.params.id).then(program => 
        program.addAnnouncers(announcer).then(res.json(program))));
});

//BORRAR LOCUTOR DE PROGRAMA
router.put('/:id/removelocutor', (req, res) => {
    Announcer.findByPk(req.body.id).then(announcer=>
    Program.findByPk(req.params.id).then(program => 
        program.removeAnnouncers(announcer).then(res.json(program))));
});

//VERIFICAR SI LOCUTOR ESTA EN PROGRAMA (RETURN boolean)
router.get('/:id/haslocutor', (req, res) => {
    Announcer.findByPk(req.body.id).then(announcer=>
    Program.findByPk(req.params.id).then(program => 
        program.hasAnnouncer(announcer).then(r=>res.json(r))));
});

//-------------------------------------------------------------------------------------------
//CONSULTAS
//-------------------------------------------------------------------------------------------
// ver el director del programa por id de programa /api/programs/:id/director

router.get('/:id/director', (req, res) => {
    Program.findByPk(req.params.id).then(user => {
        user.getDirector().then(director => {
            res.json(director);
        })
    });
});

module.exports = router;