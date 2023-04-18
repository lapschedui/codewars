// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
    let result = [];
    for (let a of x) {
        result.push(a * 2);
    }
    return result;
}