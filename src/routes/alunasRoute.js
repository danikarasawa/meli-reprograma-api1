const express = require('express')
const router = express.Router()
const controllerAlunas = require('../controllers/alunasController')
// const alunas = require('../model/alunas.json') //ELE FICA NA CONTROLLER

router.get('/', controllerAlunas.get) //function(req, res){
    //res.status(200).send(alunas)
//})

module.exports = router