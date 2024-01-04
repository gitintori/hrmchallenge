const inbox = [6, 3, 8, 3, 2, 5, 0, 9];
const outbox = [];

for (let i = 0; i < inbox.length - 1; i += 2) {
  const firstNumber = inbox[i];
  const secondNumber = inbox[i + 1];

  const result = Math.floor(firstNumber / secondNumber);
  outbox.push(result);
}

console.log('Outbox:', outbox);
