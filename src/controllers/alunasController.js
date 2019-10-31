const alunas = require('../model/alunas.json');
const fs = require('fs');

//MÉTODOS GET CRIADOS 

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

//CÓDIGO DA CAROL JANDOSO
// exports.getBooks = (req, res) => {
//     const id = req.params.id
//     const aluna = alunas.find(aluna => aluna.id == id)
//     if(!aluna){
//         res.send("Aluna não encontrada")
//     }
//     const livrosAluna = aluna.livros
//     const titulosLivros = livrosAluna.map(livro => livro.titulo)
//     res.status(200).send(titulosLivros)
// } 

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

exports.getAge = (req, res) => {
    const id = req.params.id // DEFINE O NÚMERO PASSADO NA ROUT /:id/idade
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna) { //!aluna > se for algo falso, diferente do que é esperado neste caso 
        res.send("Amiga, o que está errado, não está certo")
    }
    const alunaAge = aluna.dateOfBirth
    const quebraAge = alunaAge.split('/')
    //console.log(quebraAge)

    const anoDeNasc = parseInt(quebraAge[2]) //NÃO PRECISA DO PARSEINT
    if (isNaN(anoDeNasc))
        return false
    //console.log(anoDeNasc)

    const mesDeNasc = parseInt(quebraAge[1])
    if (isNaN(mesDeNasc))
        return false
    //console.log(mesDeNasc)

    const diaDeNasc = parseInt(quebraAge[0])
    if (isNaN(diaDeNasc))
        return false
    //console.log(diaDeNasc)

    const idadePronta = calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc)

    res.status(200).send({ idadePronta })
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
    const now = new Date()
    const anoAtual = now.getFullYear()
    const mesAtual = now.getMonth() + 1 //CRIARAM COM MÊS 0 E AÍ DÁ PAU. PRECISA COLOCAR +1
    const hoje = now.getDate()

    let idade = anoAtual - anoDeNasc

    if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
    }
    return idade

}

//MÉTODOS POST CRIADOS

exports.post = (req, res) => {
    const { nome, dateOfBirth, nasceuEmSp, id, livros } = req.body;
    alunas.push({ nome, dateOfBirth, nasceuEmSp, id, livros });

    //ESCREVER O CAMINHO ABSOLUTO (TODAS AS PASTAS) PARA ELE FUNCIONAR, SENÃO DÁ PAU
    fs.writeFile('./src/model/alunas.json', JSON.stringify(alunas), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!");
    });

    return res.status(201).send(alunas);
    //201 STATUS DE 'ALGO FOI CRIADO COM SUCESSO'
}

exports.postBooks = (req, res) => {
    const id = req.params.id;
    const aluna = alunas.find(aluna => aluna.id == id);
    if (!aluna) {
        res.send("Não encontrei essa garota");
    }
    const { titulo, leu } = req.body;
    alunas[aluna.id - 1].livros.push({ titulo, leu });

    fs.writeFile('./src/model/alunas.json', JSON.stringify(alunas), 'utf8', function (err) {
        if (err) {
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!");
    });
    return res.status(201).send(alunas[aluna.id - 1].livros);
}