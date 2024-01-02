const inbox = [2, 2, -7, -7, 2, 2, 0, -4];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {
    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];

    if (firstBox > secondBox) {
        outbox.push(firstBox);  
    } if (secondBox > firstBox) {
        outbox.push(secondBox)
    } if (firstBox === secondBox) {
        outbox.push(firstBox || secondBox)
    }
}

console.log('Outbox:', outbox);
