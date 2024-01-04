function fibonacciSequence(n) {
    const sequence = [1, 1];
    var i = 2;
  
    while (sequence[i - 1] + sequence[i - 2] <= n) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
      i++;
    }
  
    return sequence;
  }
  
  const inbox = [8, 19];
  const outbox = [];
  
  for (var i = 0; i < inbox.length; i++) {
    const fibonacciArray = fibonacciSequence(inbox[i]);
    outbox.push(fibonacciArray);
  }
  
  console.log('Outbox:', outbox);
