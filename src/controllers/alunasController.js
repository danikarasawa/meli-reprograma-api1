const alunas = require('../model/alunas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if (id > 17 || id <= 0) {
        //res.send("Ai ai ai... ID inválido!")
        res.redirect(301, "http://www.mercadolivre.com.br") //MÉTODO LEGAL PARA REDIRECIONAR ALGO OU URL 
    }
    //console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))   
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna) { //!aluna > se for algo falso, diferente do que é esperado neste caso 
        res.send("Amiga, o que está errado, não está certo")
    }
    const livrosAluna = aluna.livros
    const livrosLidos = livrosAluna.filter(livro => livro.leu == 'true')
    const tituloLivros = livrosLidos.map(livro => livro.titulo)
    res.status(200).send(tituloLivros)
}

exports.getSp = (req, res) => {
    //const nasceuEmSp = req.params.nasceuEmSp
    const alunaSp = alunas.filter(aluna => aluna.nasceuEmSp == "true")
    // const alunas.filter(function(aluna){ //ISSO É IGUAL A ARROW FUNCTION ACIMA 
    //     return aluna.nasceuEmSp == "true"
    // })
    const nomePaulistas = alunaSp.map(aluna => aluna.nome)
    res.status(200).send(nomePaulistas) //SE COLOCAR RES.SEND() RETORNO 'OK' NA TELA :P
    
}
    
    
    //const aluna = alunas.find(aluna => aluna.nasceuEmSp == nasceuEmSp)
    // const sampaCrew = nome.nascidaSp
    // const paulistaEncontrada = sampaCrew.filter(sampa => sampa.true == 'true')
    // const nomePaulistas = paulistaEncontrada.map(garotaSp => garotaSp.nome)
    // res.send(200).send(nomePaulistas)
