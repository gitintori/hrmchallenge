const inbox = [5, 0, 1, 3, -8, 5, 6, -6 ];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {

    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];
    const total= firstBox + secondBox

    outbox.push(total);
}

console.log('Outbox:', outbox);