const inbox = ['a', 'c', 'b', 'x'];
const tiles = ['b', 'a', 'x', 'b', 'c', 'x', 'a', 'b', 'a', 'x', 'c', 'b', 'a', 'b', 0];
const outbox= [];

for (var i = 0; i < inbox.length; i++) {
    const currentBox = inbox[i];
    const count = tiles.filter(tile => tile === currentBox).length;
    outbox.push(count);
  }
  
  console.log('Outbox:', outbox);
