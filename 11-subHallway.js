const inbox = [8, 3, 6, 2, -1, -1, -6, 6];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {
    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];

    const result1 = firstBox - secondBox;
    const result2 = secondBox - firstBox;

    outbox.push(result1, result2);
}

console.log('Outbox:', outbox);
