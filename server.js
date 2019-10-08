// const express = require("express")
// const app = express() NÃO PRECISA PQ ISSO ESTÁ NO APP.JS

const app = require('./src/app');
const port = 3000;

app
    .listen(port, function(){
    console.log(`app está rodando na porta ${port}, amiga. Atenta!`)
});

//     .use("/", function (request, response) { //OU USAR (req, res) > MAIS COMUM DE USAR ASSIM ESSE CALLBACK
//     console.log('url:', request.url)
//     response.status(200).send('Eita, amiga! Olha isso!!')
// }) NÃO PRECISA PORQUE ESTÁ NO APP. JS AGORA

    // .listen(3000) //MELHOR DEIXAR ASSIM A IDENTAÇÃO
