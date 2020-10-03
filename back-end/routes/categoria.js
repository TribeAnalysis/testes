const controller = require('../controllers/categoria')
const express = require('express')

const router = express.Router()

router.post('/',controller.novo)//create


module.exports =router
//OK