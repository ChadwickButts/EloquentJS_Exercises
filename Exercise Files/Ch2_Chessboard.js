/*

Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a '#' character. The characters should form a chessboard.

Passing this string to console.log should show something like this: 

# # # #
# # # # 
# # # # 
# # # # 
# # # # 
# # # # 
# # # # 
# # # # 

Confused by example output above.
Misunderstood that one string should be built to represent the board.
Refactored original answer to incorporate correct requirements.

Book Solution:

    let size = 8;

    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
            board += " ";
            } else {
            board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);

*/


console.log("creating chessboard...\n")

let size = 2;
let width = size;
let string = '';

while ( size > 0 ) {
    for ( let count = 1; count <= width; count++) {
        if ( size % 2 === 0) {
            if (count % 2 === 0) {
                string += ' ';
            } else {
                string += '#';
            }    
        } else {
            if (count % 2 === 0) {
                string += '#';
            } else {
                string += ' ';
            }
        }        
    }
    string += '\n';
    size--;
}
console.log(string);

console.log("chessboard done.")

