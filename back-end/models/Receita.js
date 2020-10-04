const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type:String,
        required:true // not null
    },
    valor: { //tem o enum
        type: Number,
        required:true,
        min:0
    },
    data:{
        type: Date,
        required:true
    },
    tipo:{
        type:String,
        required:true,
        enum:['Receita','Despesa']
    },
    categoria:{
        type:Number,
        required:true,
        default:'Outros'
    }
})
/*,index{unique:true} > deixe jeito fica unico */
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Receita',esquema,'receitas')


