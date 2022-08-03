
// const button = document.querySelector('#openModal');
// button.addEventListener('click', function() {
//     button.nextElementSibling.classList.remove('invisible')
//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape') {
//             button.nextElementSibling.classList.add('invisible')
//         }
//     })
// })


const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if (isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})