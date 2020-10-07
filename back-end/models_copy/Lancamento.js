const mongoose = require('mongoose')

const aleatorioN =Math.floor( Math.random(1,9999999))

const esquema = mongoose.Schema({
    
    idRelacional:{
        type:Number,
        default:aleatorioN
    },
    nomePositivo:{
        type:mongoose.ObjectId,
        ref:'Positivo'   
    },
    nomeDespesa:{
        type:mongoose.ObjectId,
        ref:'Despesa'
    }
    
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Lancamento',esquema,'lancamentos','todosLct')


