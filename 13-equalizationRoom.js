const inbox = [7, 8, 4, 4, -4, 1, -1, -1];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {
    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];

    if (firstBox === secondBox) {
        outbox.push(firstBox || secondBox);  
    }
}

console.log('Outbox:', outbox);
