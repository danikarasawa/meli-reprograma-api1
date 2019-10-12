const professoras = require('../model/professoras.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(professoras)
}

//MINHA IDEIA > NÃO ESTÁ RODANDO
// exports.getNoCpf = (req, res) => {
//     const profsNoCPF = professoras.peek(professoras.cpf)
//     res.status(200).send(profsNoCPF)
// }

//CODIGO DA NATY
// exports.getNoCpf = (req, res) => {
//     const arrProfs = []
//     for (let i = 0; i < professoras.length; i++) {
//         const semCpf = {}
//         semCpf.id = professoras[i].id
//         semCpf.nome = professoras[i].nome
//         semCpf.especialidade = professoras[i].especialidade
//         semCpf.signo = professoras[i].signo
//         arrProfs.push(semCpf)
//     }
//     res.status(200).send(arrProfs)
// }

//CODIGO VALENTINA
// exports.get = (req, res) => {
//     const profSemCpf = professoras.map(item => {
//         item.cpf = '****'
//         return item;
//     })
//     res.status(200).send(profSemCpf)
// }

//CODIGO DA SHIRLEY
// exports.get = (req, res) => {
//     const profSemCpf = professoras.map(item => {
//         delete item.cpf
//         return item
//     })
//     res.status(200).send(profSemCpf)
// }

//MEU CÓDIGO - RODANDO
// exports.getById = (req, res) => {
//     const id = req.params.id
//     res.status(200).send(professoras.find(item => item.id == id))
// }

//CODIGO NATY
exports.getById = (req, res) => {
    const id = req.params.id
    const prof = professoras.find(item => item.id == id)
    delete prof.cpf
    res.status(200).send(prof)
}

//OLHAR ESSE CÓDIGO > NÃO ESTÁ RODANDO 
// exports.getSigno = (req, res) => {
//     const signoF = professoras.map(item => {
//         item.signo = 'Magic'
//         return item
//     })
//     res.status(200).send(signoF)
// }