// Eventos

// const h1 = document.querySelector('h1');
// h1.addEventListener('click', print)
// h1.addEventListener('mouseover', print)
// function print() {
//     console.log('print')
// }


// Eventos de teclado
// const input = document.querySelector('input')

// input.onkeydown = function() {
// input.onkeypress = function() {
// input.onkeyup = function() {
//     console.log('rodei')
// }


// Adicionando eventos via JS (Outro método)
// const h1 = document.querySelector('h1');
// h1.addEventListener('click', print)

// h1.addEventListener('click', function() {
//     console.log('outro momento')
// })


// argumento event
const input = document.querySelector('input')
input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}