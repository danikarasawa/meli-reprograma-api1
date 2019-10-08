const express = require("express")
const app = express()

//CRIAÇÃO DE ROTAS PADRÃO E OUTRAS NECESSÁRIAS

const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')

app.use('/', index)
app.use('/alunas', alunas)

module.exports = app //SE QUISER USAR EM OUTRO LUGAR É SÓ CHAMAR O MÓDULO
