export function taskFirst() {
  const task = 'I prefer const when I can.'; //0x00-ES6_basic
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
