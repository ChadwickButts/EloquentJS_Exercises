/*

    Write a function that takes a string as its only argument and returns a number 
    that indicates how many uppercase "B" characters there are in the string.

    Next, write a function that behaves like the previous, except it takes a second 
    argument that indicates the character that is to be counted. 
    
    Rewrite the first function using the second function.

*/

function countBs(strArg) {
    return countChar(strArg, "1");
}

function countChar(strArg, queryChar) {
    let count = 0;

    for (let i = 0; i < strArg.length; i++) {
        let char = strArg[i];

        if (char === queryChar) {
            count++;
        }
    }

    return count;
}

console.log(countBs("BaseBall"));