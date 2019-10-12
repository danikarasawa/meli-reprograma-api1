const express = require('express')
const router = express.Router()
const controllerProfessoras = require('../controllers/professorasController')

router.get('/', controllerProfessoras.get) 
router.get('/:id', controllerProfessoras.getById)
//router.get('/:id/signo', controllerProfessoras.getSigno)

module.exports = router
