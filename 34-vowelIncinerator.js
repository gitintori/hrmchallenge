const inbox = ['w', 'h', 'e', 'n', 'a', 'r', 'm', 'n', 'e', 'w'];
const vogais = ['a', 'e', 'i', 'o', 'u'];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
  const box = inbox[i];

  if (!vogais.includes(box)) {
    outbox.push(box);
  }
}

console.log('Outbox:', outbox);
