// Criando e adicionando elementos 

// createElement
const div = document.createElement('div');
div.innerText = "Olá devs!"

// // append prepend
const body = document.querySelector('body');
// body.append(div)

// insertBefore
const header = document.querySelector('header');
body.insertBefore(div, header.nextElementSibling)