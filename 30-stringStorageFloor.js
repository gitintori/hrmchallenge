const inbox = [15, 7, 0, 20, 17, 11, 20, 2, 13, 4, 17, 21];
const tiles = ['g', 'e', 't', 0, 't', 'h', 0, ' t', 'a', 'r', 0, 'a', 'w', 'a', 'k', 'e', 0, 'i', 's', 0, 'x', 'x', 'x', 0, 15];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
  const startIndex = inbox[i];
  var currentIndex = startIndex;
  const currentSequence = [];

  while (tiles[currentIndex] !== 0) {
    currentSequence.push(tiles[currentIndex]);
    currentIndex++;
  }

  outbox.push(currentSequence);
}

console.log('Outbox:', outbox);
