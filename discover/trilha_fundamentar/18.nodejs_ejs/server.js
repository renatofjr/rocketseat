const express = require('express');
const app = express();

// informando ao express que seja utilizado ejs
app.set('view engine', 'ejs');

// criando rota
app.get('/', function(req, res) {
    const items = [
        {
            title: "D",
            message: "Desenvover aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "Alma"
        },
        {
            title: "I",
            message: "install ejs"
        },
        {
            title: "S",
            message: "Sintaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS";
    res.render('./pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', function(req, res) {
    res.render('./pages/about');
})

// setar a porta 8080 para o server express
app.listen(8080);
console.log('Servidor funcionando');