// Manipulando conteúdo

// textContent
// const element = document.querySelector('h1')
// element.textContent += ' Olá devs!'
// console.log(element.textContent)


// innerText
// const element = document.querySelector('h1')
// element.innerText = 'Olá Devs!'


// innerHTML
// const element = document.querySelector('h1')
// element.innerHTML = 'Olá Devs! <small> !!!! </small>'


// value
// const element = document.querySelector('input')
// consultar valor
// console.log(element)
// atribuição de valores
// element.value = 'valor que eu quiser'


// Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')
console.log(headerId)

header.removeAttribute('id')

header.setAttribute('class', 'bg header')
