const { EventEmitter } = require('events');
const { inherits } = require('util');
// const ev = new EventEmitter();

// // Ouvindo o evento
// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você: ', message);
// });

// // Ouvindo uma única vez
// ev.once('saySomething', (message) => {
//     console.log('Eu ouvi você: ', message);
// });

// // Emitindo evento
// ev.emit('saySomething', "Mayk");
// ev.emit('saySomething', "João");
// ev.emit('saySomething', "Camila");

function Character(name) {
    this.name = name;
}

// herdando o EventEmitter
inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`));

console.log('Oh! E agora, quem poderá nos defender?');
chapolin.emit('help');