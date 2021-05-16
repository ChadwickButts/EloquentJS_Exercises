/*

Use console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz".

When that is working, modify the program to print "FizzBuzz" for numbers that are divisible by both 3 AND 5.

Book Solution:

    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }

*/

console.log("starting loop...")

for (let number = 1; number < 101; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else if (number % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(number);
    }
}

console.log("end of loop")
