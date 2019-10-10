const express = require("express")
const app = express()

app.all("*", function (request, response, next) {
    console.log("Vim dar um oi pra ti, amiga application")
    next() //FAZ A FUNCTION IR PARA A PRÓXIMA TAREFA A SER EXECUTADA > SEM O NEXT O APP.ALL FICA RODANDO PRA SEMPRE
})



//CRIAÇÃO DE ROTAS PADRÃO E OUTRAS NECESSÁRIAS

const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")

app.use("/", index)
app.use("/alunas", alunas)

module.exports = app //SE QUISER USAR EM OUTRO LUGAR É SÓ CHAMAR O MÓDULO
