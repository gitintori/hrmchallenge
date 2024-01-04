const inbox = ['u', 'n', 'd', 'e', 'r', 0, 'd', 'i', 'r', 't', 0];
const outbox = [];

var currentSequence = [];

for (var i = 0; i < inbox.length; i++) {
  const currentBox = inbox[i];

  if (currentBox !== 0) {
    currentSequence = [currentBox, ...currentSequence];
  } else if (currentBox === 0 && currentSequence.length > 0) {
    currentSequence.sort((a, b) => a.localeCompare(b));
    outbox.push(currentSequence);
    currentSequence = [];
  }
}

console.log('Outbox:', outbox);
