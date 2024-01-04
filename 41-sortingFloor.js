const inbox = [78, 15, 49, 0, 'c', 'l', 'o', 'u', 'd', 0, 63, 18, 99, 93, 27, 60, 82, 60, 75, 58, 0];
const outbox = [];

var currentSequence = [];

for (var i = 0; i < inbox.length; i++) {
  const currentBox = inbox[i];

  if (currentBox !== 0) {
    currentSequence = [currentBox, ...currentSequence];
  } else if (currentBox === 0 && currentSequence.length > 0) {
    currentSequence.sort((a, b) => a - b);
    outbox.push(currentSequence);
    currentSequence = [];
  }
}

console.log('Outbox:', outbox);
