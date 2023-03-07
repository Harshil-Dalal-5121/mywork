// Primitive datatypes

// n ull
// N umber 
// B igInt
// B oolean
// S tring
// S ymbol
// u ndefined

let a = null;
let b = 345;
let c = true; // or false
let d = BigInt(567) + BigInt(3); //This stores addtion of 567 & 3
let e = "Harshil";
let f = Symbol("I am good");
let g; //is undefined
console.log(a, b, c, d, e, f, g);

// Non-primtive datatypes
const a1={
    name:"Harshil",//object is a key value pair
//     key   value
}//we can add a new key value pair in the object but can't reassign a new value to the object.

console.log(a1);
a1['name']="Harsh";
a1['class']="Intern";
console.log(a1);

