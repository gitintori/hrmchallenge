const letters = ['U', 'J', 'X', 'G', 'B', 'E'];
const outbox = [];

for (var i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (letter === 'B') {
        outbox.push(letter);
    }
}

for (var i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (letter === 'U') {
        outbox.push(letter);
    }
}

for (var i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (letter === 'G') {
        outbox.push(letter);
    }
}

console.log('Outbox:', outbox.join(''));
