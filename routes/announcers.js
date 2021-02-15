const express = require('express');
const router = express.Router();
const Announcer = require('../database/models/Announcer');
const Program = require('../database/models/Program');


// CREATE /api/announcers
router.post('/', (req, res) => {
    Announcer.create({
        name: req.body.name,
        email: req.body.email,
        dni: req.body.dni  
        
    }).then(director => {
        res.json(director);
    }).catch(err => {
        res.json(err);
    })
});


// READ TODOS /api/announcers
router.get('/', (req, res) => {
    Announcer.findAll({
        include: [{
            model: Program,
            as: "programs",
            attributes: ['name']
        }],
        attributes: ['id','name', 'dni','email']
    }).then(announcers => res.json(announcers));
});



//READ un director /api/announcers/id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Announcer.findOne({
        include: [{
            model: Program,
            as: "programs",
            attributes: ['name']
        }],
        attributes:['name','dni','email'],
        where: {id}
    }).then(announcer=>{        
        res.json(announcer);
    });  
});

//LO COMENTO PORQUE LOS PROGRAMAS POR LOCUTOR YA LOS LLEVA CON LA DATA DEL LOCUTOR.
// //todos los programas de un locutor
// router.get('/:id/programasporlocutor', (req, res) => {
//     const { id } = req.params;
//     Announcer.findOne({
//         include: [{
//             model: Program,
//             as: "programs",
//             attributes: ['name']
//         }],attributes:['name'],
//         where: {id}
//     }).then(announcer=>{        
//         res.json(announcer);
//     });  
// });


// UPDATE /api/announcers/:id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    Announcer.update({
        name: req.body.name,
        email: req.body.email,
        dni: req.body.dni  
    },{
        where: {id}
    }).then(announcer => {
        res.json(announcer);
    });
});


// DELETE /api/announcers/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Announcer.destroy({
        where: {
            id
        }
    }).then(announcer => {
        res.json(announcer);
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


module.exports = router;