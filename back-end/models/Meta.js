const mongoose = require('mongoose')
const data = new Date()
const mes = (data.getMonth()) + 1 
const ano=data.getFullYear(data)
console.log(`${data.getDay()}/${(data.getMonth()+1)}/${data.getFullYear()}`)


const esquema = mongoose.Schema({
    categoria:{
        type:String,
        required:true ,
        index:{unique:true}
        
    },
    mes:{
        type: Number,
        default:mes,
        enum:['1','2','3','4','5','6','7','8','9','10','11','12']
    },
    ano:{
         type:Number,
        default: ano
    },
    valor_Def:{
        type:Number,
        required:true,
        min:1
    },
    valor_Gasto:{
        type:Number,
        required:true,
        min:1
    }
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Meta',esquema,'Metas')


