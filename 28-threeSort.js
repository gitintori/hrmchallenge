const inbox = [7, 6, 3, 3, 4, 8, 0, 8, -5, 2, -1, 3];
const outbox = [];

for (let i = 0; i < inbox.length; i += 3) {
  const currentBoxes = inbox.slice(i, i + 3);
  const ascOrder = currentBoxes.sort((a, b) => a - b);
  outbox.push(ascOrder);
}

console.log('Outbox:', outbox);
