/*

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

*/

function isEven(num) {
    num = Math.floor(num);

    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);
    }
   
    return isEven(num - 2);
}


console.log(isEven(-1));