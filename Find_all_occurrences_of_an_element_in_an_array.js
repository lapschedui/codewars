// DESCRIPTION:
// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

const findAll = (array, n) => {
    let result = [];
    for (let a in array) {
        if (n === array[a]) {
            result.push(Number(a));
        }
    }
    return result;
}