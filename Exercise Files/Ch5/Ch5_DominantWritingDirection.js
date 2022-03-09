/*

Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be "ltr" (left to right), 
"rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a 
script associated with them. The characterScript and countBy functions defined earlier 
in the chapter are probably useful here.

*/

var SCRIPTS = require('./scripts');

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let direction = groupName(item);
      let known = counts.findIndex(c => c.direction == direction);
      if (known == -1) {
        counts.push({direction, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

function dominantDirection(text) {
    return countBy(text, c => {
        let code = c.codePointAt(0);
        let script = characterScript(code);
        if (script !== null) {
            return script.direction;
        } else {
            return 'none';
        }
    }).reduce((a, b) => {
        return a.count > b.count ? a.direction : b.direction;
    });
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl