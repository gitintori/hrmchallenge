const inbox = [2, -2, 0, 0];
const outbox = [];

for (let i = 0; i < inbox.length; i++) {
  const countdownArray = [];

  if (inbox[i] < 0) {
    for (var j = inbox[i]; j <= 0; j++) {
      countdownArray.push(j);
    }
  } else {
    for (var j = inbox[i]; j >= 0; j--) {
      countdownArray.push(j);
    }
  }

  outbox.push(countdownArray);
}

console.log('Outbox:', outbox);
