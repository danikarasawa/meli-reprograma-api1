const express = require('express')
const router = express.Router()
const controllerProfessoras = require('../controllers/professorasController')

router.get('/', controllerProfessoras.get) 
router.get('/signo', controllerProfessoras.getSigno)

module.exports = router