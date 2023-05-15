// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
  let result = [];
  for(let a = 0; a < size; a++){
    result[a] = [a+1];
    for(let i = 1; i < size; i++){
      if(a == 0){
        result[a].push(i+1);
      } else {
        result[a].push(result[a][0] * result[0][i]);
      }
    }
  }
  return result;
}
