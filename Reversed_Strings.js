// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let result = "";
  for (let l = str.length - 1; l >= 0; l--) {
    result = result + str[l];
  }
  return result;
}