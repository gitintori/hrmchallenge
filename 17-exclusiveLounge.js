const inbox = [2, -6, -1, -6, 8, 1, 3, -9];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {
    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];

    if ((firstBox > 0 && secondBox > 0) || (firstBox < 0 && secondBox < 0)) {
        outbox.push(0);  
    } else {
        outbox.push(1);
    }
}

console.log('Outbox:', outbox);
