const inbox = ['d', 'e', 'e', 'c', 'b', 'c', 'a', 'e', 'd', 'd'];
const outbox = [];

for (var i = 0; i < inbox.length; i++) {
    const box = inbox[i];
  
    if (!outbox.includes(box)) {
      outbox.push(box);
    }
  }
  
  console.log('Outbox:', outbox);
