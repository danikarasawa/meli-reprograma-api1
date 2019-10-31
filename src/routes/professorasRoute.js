const express = require('express')
const router = express.Router()
const controllerProfessoras = require('../controllers/professorasController')

router.get('/', controllerProfessoras.get) 
router.get('/:id', controllerProfessoras.getById)
router.post('/', controllerProfessoras.post)

module.exports = router
