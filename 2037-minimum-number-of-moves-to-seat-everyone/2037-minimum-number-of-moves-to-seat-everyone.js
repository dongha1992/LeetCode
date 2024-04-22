/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b)=>a-b)
  students.sort((a, b)=>a-b)
  const ch = Array.from({length:students.length}).fill(0)
  let moves = 0;
  console.log(students, seats)
  for(let i = 0; i < students.length; i++){
    const student = students[i]
    const seat = seats[i]
    moves += Math.abs(student - seat)
  }
  return moves
};