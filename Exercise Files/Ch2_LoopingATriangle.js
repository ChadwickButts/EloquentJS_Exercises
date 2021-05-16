/*

*
**
***
****
*****
******
*******

Book Solution:

for (let line = '*'; line.length < 8; line += '*') 
    console.log(line);

*/



let message = '';
let pass = 1;

while (pass < 8) {
    for (let count = 0; count < pass; count++) {
        message += '*';
    }
    console.log(message);
    message = '';
    pass++;
}

