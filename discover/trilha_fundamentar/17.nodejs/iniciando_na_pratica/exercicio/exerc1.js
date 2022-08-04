/* 
    Crie 2 arquivos JavaScript.

    O primeiro, irá exportar uma função chamanda getFlag() que receberá um argumento
    do tipo String;
    Essa função deverá buscar dentro do array process.argv a flag desejada, que é a
    String e retornar o valor da flag;

    O segundo irá importar a função e passar a flag desejada.

    Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
    para que seja impresso no termina a saudação e o nome da pessoa.

*/

// const myModule = require('./exerc1a.js')
// myModule(process.argv)

const getFlagValue = require('./exerc1a.js');
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)