const inbox = ['f', 'a', 'l', 's', 'e', 0, 'a', 'r', 'm', 'y', 0, 'f', 'a', 'c', 'e', 0];
const outbox = [];

var currentSequence = [];

for (var i = 0; i < inbox.length; i++) {
  const currentBox = inbox[i];

  if (currentBox !== 0) {
    currentSequence = [currentBox, ...currentSequence];
  } else if (currentBox === 0 && currentSequence.length > 0) {
    outbox.push(currentSequence);
    currentSequence = [];
  }
}

console.log('Outbox:', outbox);
