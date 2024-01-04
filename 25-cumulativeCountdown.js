const inbox = [3, 1, 0, 5];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
  var currentNumber = inbox[i];
  var sum = 0;

  if (currentNumber > 0) {
    for (var j = currentNumber; j >= 0; j--) {
      sum += j;
    }
  }

  outbox.push(sum);
}

console.log('Outbox:', outbox);
