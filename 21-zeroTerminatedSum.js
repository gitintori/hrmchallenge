const inbox = [3, 7, 0, 8, -6, 2, 0, 0, 0, 4, -5, 2, 3, -8, 7, 0];
const outbox = [];

var sum = 0;

for (var i = 0; i < inbox.length; i++) {
  sum += inbox[i];

  if (inbox[i] === 0) {
    outbox.push(sum);
    sum = 0;
  }
}

console.log('Outbox:', outbox);
