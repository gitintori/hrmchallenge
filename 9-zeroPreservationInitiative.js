const inbox = [6, 0, 1, 'F', 0, 0, 6];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
    const box = inbox[i];

    if (box === 0) {
        outbox.push(box);  
    }
}

console.log('Outbox:', outbox);
