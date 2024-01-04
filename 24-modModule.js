const inbox = [6, 4, 9, 3, 3, 6, 0, 1];
const outbox = [];

for (let i = 0; i < inbox.length - 1; i += 2) {
  const firstNumber = inbox[i];
  const secondNumber = inbox[i + 1];

  if (secondNumber !== 0) {
    const remainder = firstNumber % secondNumber;
    outbox.push(remainder);
  } else {
    outbox.push(0);
  }
}

console.log('Outbox:', outbox);
