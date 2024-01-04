const inbox = [3, 9, 10, 6];
const outbox = [];

const numRows = 4;
const numColumns = 4;

inbox.forEach(floor => {
  const column = floor % numColumns;
  const row = Math.floor(floor / numColumns);

  outbox.push([column, row]);
});

console.log('Outbox:', outbox);
