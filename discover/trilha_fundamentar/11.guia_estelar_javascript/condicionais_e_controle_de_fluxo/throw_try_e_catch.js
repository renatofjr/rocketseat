// throw

function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é obrigatório"
    }

    console.log('depois do erro')
}

// try...catch
// recomendado o uso deste ao invés do throw
// throw interrompe a aplicação por inteiro
try {
    sayMyName()
} catch(err) {
    console.log(err)
}

console.log('após o try/catch')