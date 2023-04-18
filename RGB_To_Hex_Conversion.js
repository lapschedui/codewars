// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result 
// in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
    let result = [r, g, b].reduce((result, a) => a > 0 ? result += convers(a) : result += "00", '');
    function convers(a) {
        if (a > 255) {
            a = 255;
        }
        let m = a.toString(16).toUpperCase().padStart(2, '0');
        return m;
    }

    return result;
}