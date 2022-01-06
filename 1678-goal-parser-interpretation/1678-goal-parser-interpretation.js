/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
const parsed = [];
for (let i = 0; i < command.length; i++) {
  const isO = command[i] === '(' && command[i + 1] === ')';
  const isAl = command[i] === '(' && command[i + 1] !== ')';
  if (isO) {
    parsed.push('o');
    i = i + 1;
  } else if (isAl) {
    parsed.push('al');
    i = i + 3;
  } else {
    parsed.push('G');
  }
}
return parsed.join('');

};