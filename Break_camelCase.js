// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let result = '';
    let pattern = /[A-Z]/;
    for (let a of string) {
        if (a.search(pattern) != -1) {
            result += " ";
        }
        result += a;
    }
    return result;
}