// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
  let result = [];
  if(array.length < 2){return array[0];}
  function massCut(array,n,m){
    for(let a in array){
    array[a] = array[a].slice(n,m);
    }
  }
  while(array.length >= 1){
  let m = 0;
  let n = 0;
    for(m; m <= array.length-1; m++){
      result.push(array[n][m]);
    }
    array = array.slice(1);
    m--;
    for(n; n <= array.length-1; n++){
      result.push(array[n][m]);
    }
    massCut(array,0, -1);
    n--;
    m--;
    for(m; m >= 0; m--){
      result.push(array[n][m]);
    }
    array = array.slice(0, -1);
    n--;
    m++;
    for(n; n >= 0; n--){
      result.push(array[n][m]);
    }
    massCut(array,1, array.length+1);
  }
  return result;
}
