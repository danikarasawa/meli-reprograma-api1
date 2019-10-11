const professoras = require('../model/professoras.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(professoras)
}

exports.getSigno = (req, res) => {
const profSigno = professoras.find(item => item.signo == signo)
res.status(200).send(profSigno)
}

