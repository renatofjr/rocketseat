/*
    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá
    mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido
    do valor do saldo
    
*/

let family = {
    incomes: [1, 123, 4254, 1234],
    expenses: [23, 453, 1323, 345]
}

function sum(array) {
    let nTotal = 0
    for(let value of array) {
        nTotal += value
    }
    console.log(nTotal)
    return nTotal
}

function nTotaliza(family) {

    const calculateIncomes = sum(family.incomes)    
    const calculateExpenses = sum(family.expenses)

    nTotal = calculateIncomes - calculateExpenses

    let balanceText = "negativo"

    if(nTotal >= 0) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${nTotal.toFixed(2)}`)
}

nTotaliza(family)
