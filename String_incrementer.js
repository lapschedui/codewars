// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    let patern = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let length = strng.length;
    let number = '';
    let position = 0;
    for (let a = length - 1; a >= 0; a--) {
        if (!patern.includes(strng[a])) {
            number = strng[a] + number;
            position = a;
            continue;
        } else if (position == 0) {
            position = length;
        } else {
            break;
        }
    }
    let itog = String(Number(number) + 1);
    return strng.slice(0, position) + itog.padStart(number.length, '0');
}