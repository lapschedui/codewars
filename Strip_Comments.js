// DESCRIPTION:
// Complete the solution so that it strips all text that follows 
// any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    let data = input.split("\n");
    let result = '';
    for (let a of data) {
        for (let n of markers) {
            if (a.indexOf(n) !== -1) {
                let x = a.slice(0, a.indexOf(n));
                result += x.trim();
                break;
            }
            if (markers.indexOf(n) === markers.length - 1) {
                result += a.trim();
            }
        }
        if (data.indexOf(a) === data.length - 1) {
            break;
        }
        result += "\n";
    }
    return result;
}