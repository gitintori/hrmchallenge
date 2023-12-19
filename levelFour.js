const inbox = [3, 7, 'S', 'A', 3, 9];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {

    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];

    outbox.push(secondBox, firstBox);
}

console.log('Outbox:', outbox);
