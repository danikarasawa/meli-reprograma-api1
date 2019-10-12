const express = require("express")
const app = express()

// app.all("*", function (request, response, next) {
//     console.log("Vim dar um oi pra ti, amiga application")
//     next() //FAZ A FUNCTION IR PARA A PRÓXIMA TAREFA A SER EXECUTADA > SEM O NEXT O APP.ALL FICA RODANDO PRA SEMPRE
// })

//CRIAÇÃO DE ROTAS PADRÃO E OUTRAS NECESSÁRIAS
const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")

app.use("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app //SE QUISER USAR EM OUTRO LUGAR É SÓ CHAMAR O MÓDULO
