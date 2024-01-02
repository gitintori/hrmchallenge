const inbox = [7, 5, 9, 3, 4, 0, 0, 2, 1, 7];
const outbox = [];

for (var i = 0; i < inbox.length; i += 2) {
    const firstBox = inbox[i];
    const secondBox = inbox[i + 1];

    const result = firstBox * secondBox

    outbox.push(result);  
    
}

console.log('Outbox:', outbox);
