const inbox = ['A', 'B', 'C', 'D', 'E'];
const outbox = [];

while (inbox.length > 0) {
    const currentBox = inbox.shift();
    outbox.push(currentBox);
    console.log('Movendo caixa', currentBox);
}
console.log('Outbox:', outbox);
