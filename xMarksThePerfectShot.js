const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  //loop through array
  for (const move of moves) {
    if (move === 'north') {
      y = y + 1;
    }
    else if (move === 'south') {
      y = y - 1;
    }
    else if (move === 'east') {
      x = x + 1;
    }
    else {
      x = x - 1;
    }
  }
  //return as an array
  return [x, y];
}
console.log(finalPosition(moves));