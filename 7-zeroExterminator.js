const inbox = [0, 4, 'B', 0, 0, 7, 0];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
    const box = inbox[i];

    if (box !== 0) {
        outbox.push(box);  
    }
}

console.log('Outbox:', outbox);
