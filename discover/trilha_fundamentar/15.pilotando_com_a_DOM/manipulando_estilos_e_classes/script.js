// Alterando estilos

// const element = document.querySelector('body')

// element.style.backgroundColor = '#f9f3d2'
// console.log(element.style.backgroundColor)


// classList
const element = document.querySelector('body')
// adiciona class no element
element.classList.add('active', 'green')
// remove class do element
element.classList.remove('active')
// sistema verifica o class, caso tenha, remove, senão adiciona
element.classList.toggle('active')
console.log(element.classList)