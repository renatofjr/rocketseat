// estruturado
var valorHora = 50;
var tempoEstimado = 20;
var desconto = valorHora * tempoEstimado * (10/100);
var custoEstimado = valorHora * tempoEstimado - desconto;
console.log(custoEstimado);


// POO
// class Job {
//     constructor(valorHora, tempoEstimado, desconto) {
//         this.valorHora = valorHora;
//         this.tempoEstimado = tempoEstimado;
//         this.desconto = desconto;
//     }

//     calcularEstimativa() {

//     }
// }

const job = new Job();
job.valorHora = 50;
job.tempoEstimado = 20;
job.desconto = 10;
const custoEstimado = job.calcularEstimativa();
console.log(custoEstimado);