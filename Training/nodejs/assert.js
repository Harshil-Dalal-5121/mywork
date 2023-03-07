import assert from "assert";

// let x=4,y=5;
// try{
//     assert(x==y);
// }catch{
//     console.log( `x!=y`);
// }


// try{
//     assert(0);
//     console.log(`1`)
// }catch(error){
//     console.log(error);
// }

// Requiring the module
// const assert = require('assert').strict;
		
// Function call
// try {
// 	assert.deepStrictEqual({ a: '5' }, { a: '5' });
// 	console.log("No Error Occurred")
// } catch(error) {
// 	console.log("Error: ", error)
// }

// console.assert(true, "error message 1");
// console.assert(false, "error message 2");

// var a = 10, b = 5;
 console.clear();
// console.assert(1 == 1, "error at 1==1");
// console.assert(1 != 1, "error at 1!=1");
// console.assert(3 & 10, "error at 3&9");
// console.assert(1 & 6, "error at 1&6");
// console.assert(0 && 9, "error at 0&&9");
// console.assert(1 && 8, "error at 1&&8");
// console.assert(a % b == 1, "error at a%b==1");
// console.assert(a > b, "error at a>b");
// console.assert(b > a, "error at b>a");

console.debug("This is a %s", 
    " sample debug message!");
console.debug("Sample debug message"
    + " with args: %d", 34);
console.debug("Debug message: Warning "
    + "at function %s: line number %d ",
    "ff()",96)
  
var isDebugMode = true;
console.custom_debug = function(message) { 
  if (isDebugMode) {
    console.log(message);
  }
}
  
console.custom_debug("Custom debug message");