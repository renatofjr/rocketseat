/*
    ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a
    transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
    
*/

let nTemperature = "24C"

function transform(nVal) {
    const celsiusExists = nVal.toUpperCase().includes("C")
    const fahrenheitExists = nVal.toUpperCase().includes("F")

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado")
    }

    // fluxo ideal, Fahrenheit -> Celsius
    let updateDegree = Number(nVal.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    // fluxo alternativo, Celsius -> Fahrenheit
    if(celsiusExists) {
        updateDegree = Number(nVal.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = "F"
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transform('10C'))
} catch (err) {
    console.log(err.message)
}


