const controller = require('../controllers/categoria')
const express = require('express')

const router = express.Router()

router.post('/',controller.novo)//create
router.get('/',controller.listar)//retrieve

module.exports =router
//OK