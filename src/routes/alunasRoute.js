const express = require('express')
const router = express.Router()
const controllerAlunas = require('../controllers/alunasController')
// const alunas = require('../model/alunas.json') //ELE FICA NA CONTROLLER

router.get('/', controllerAlunas.get) 
router.get('/sp', controllerAlunas.getSp)
router.get('/:id', controllerAlunas.getById)
router.get('/:id/idade', controllerAlunas.getAge)
router.get('/:id/books', controllerAlunas.getBooks)

router.post('/', controllerAlunas.post)
router.post('/:id/books', controllerAlunas.postBooks)

//function(req, res){
    //res.status(200).send(alunas)
//})

module.exports = router