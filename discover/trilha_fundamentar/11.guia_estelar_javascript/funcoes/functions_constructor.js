/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())

let name = new String("Renato")
console.log(name)

let date = new Date("2022-07-26")
console.log(date)