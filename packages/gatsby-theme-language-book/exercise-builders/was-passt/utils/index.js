export function shuffleArray(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];

    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export function repeatedAnswer(alreadyAnswered, droppedItem) {
  for (const answer of alreadyAnswered) {
    if (answer.key === droppedItem.answer.key) return true;
  }
  return false;
}
