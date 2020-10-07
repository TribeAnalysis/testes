const controller = require('../controllers/positivo')
const express = require('express')

const router = express.Router()

router.post('/',controller.novo)//create
router.get('/',controller.listar)//retrieve ALL
router.get('/:id',controller.obterUm)//Retrieve One
router.put('/',controller.atualizar)//Update
router.delete('/',controller.excluir)//Delete
module.exports =router
//OK