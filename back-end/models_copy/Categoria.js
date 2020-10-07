const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type:String,
        required:true ,
        index:{unique:true}
        
    },
    cor:{
        type: String
    }
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Categoria',esquema,'categorias')


