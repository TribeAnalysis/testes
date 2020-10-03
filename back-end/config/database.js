const mongoose = require('mongoose')

module.exports = uri =>{
    mongoose.connect(uri,{
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })


mongoose.connection.on('connected',()=>
console.log('Conectado com sucesso ao servidor')
)
process.on('SIGINT',()=> // sigint é o sinal de interrupção que o servidor recebe
mongoose.connection.close(()=>{ //quando recebe fecha a coneccão
console.log(' Servidor DESCONECTADO');
process.exit(0)// 0 saiu sem erros
})
)
mongoose.connection.on('disconnected', ()=>
console.log(' Desconnectado pelo servidor')
)
}