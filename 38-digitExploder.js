const inbox = [822, 128, 6, 77];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
  const currentBox = inbox[i];
  const digits = currentBox.toString().split('').map(Number);

  outbox.push(...digits);
}

console.log('Outbox:', outbox);
