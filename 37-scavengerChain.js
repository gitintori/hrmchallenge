const inbox = [23, 0];
const tiles = ['e', 13, 0, 'c', 23, 0, 0, 0, 0, 0, 'p', 20, 0, 's', 3, 0, 0, 0, 0, 0, 'e', -1, 0, 'a', 10];
const outbox = [];

function processTiles(startIndex) {
  var currentIndex = startIndex;

  while (currentIndex < tiles.length) {
    const letter = tiles[currentIndex];

    if (letter === undefined) {
      break;
    }

    outbox.push(letter);

    currentIndex = tiles[currentIndex + 1];
  }
}

inbox.forEach(startIndex => {
  processTiles(startIndex);
});

console.log('Outbox:', outbox.join(''));
