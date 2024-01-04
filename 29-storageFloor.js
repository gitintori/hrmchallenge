const inbox = [5, 5, 4, 9, 9];
const tiles = ['n', 'k', 'a', 'e', 'r', 'd', ' o', ' l', 'y', 'j'];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
  const index = inbox[i];
  const letter = tiles[index];
  outbox.push(letter);
}

console.log('Outbox:', outbox);
