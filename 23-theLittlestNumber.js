const inbox = [9, 11, 2, 0, 12, 17, 7, 3, 0, 40, 43, 77, 22, 39, 0];
const outbox = [];

for (let i = 0; i < inbox.length; i++) {
  var currentNumber = inbox[i];
  var minNumber = Infinity;

  while (currentNumber !== 0) {
    if (currentNumber < minNumber && currentNumber !== 0) {
      minNumber = currentNumber;
    }

    i++;

    if (i < inbox.length) {
      currentNumber = inbox[i];
    } else {
      break;
    }
  }

  if (minNumber !== Infinity) {
    outbox.push(minNumber);
  }
}

console.log('Outbox:', outbox);
