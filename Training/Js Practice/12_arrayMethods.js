//* toString()==>convert all the data into string
// let ar1 = [1, 2, 3, 4, "Hard"];
// console.log(ar1);
// let b = ar1.toString();
// console.log(typeof b[0]);
// console.log("--------------------------");

// *join() => joining all the data in the array using a seperator
// let c=ar1.join("-");
// console.log(c);
// console.log(typeof c) ;
// console.log("--------------------------");

// console.log(ar1);
// let r = ar1.pop(); // *this returns the element that is poped out which is the last element in the element
// console.log(ar1, r);
// console.log("--------------------------");

// let p = ar1.push("Added using push()", 56, 56); //*used to push in element (one or more than one) in the given element at the end of the array.
// console.log(ar1);
// console.log("--------------------------");

// let sh1 = ar1.shift(); //*Similiar to pop but removes the first element instead of the last.
// console.log(sh1, ar1);
// console.log("--------------------------");

// let uf1 = ar1.unshift("New elements add using Unshift", 56, 23);
//*used to add in element (one or more than one) in the given element at the start of the array.
//*This all returns the new length of the array

// console.log(ar1);
// console.log("--------------------------");

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let d = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

console.log(a.splice(2, 10, "new", "element", "added")); //*returns a new array of removed elements
console.log(a);//*chages are made in original array
//  The first parameter (2) defines the position where new elements should be added (spliced in).

//  The second parameter (10) defines how many elements should be removed.

//  The rest of the parameters ("new" , "element" , "added") define the new elements to be added.
console.log("--------------------------");

console.log(b.slice(3, 9));
console.log(b);
// The method then selects elements from the start argument, and up to (but not including) the end argument.

console.log("--------------------------");
console.log(b.slice(3)); 
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

console.log(a);
console.log(a.length);
console.log("--------------------------");
// delete a[0];
// console.log(a);
// console.log(a.length);
// console.log("--------------------------");

// let e = a.concat(b,c,d);
console.log(a.concat(b, c, d));
//concat returns a new array after joining all the array but it doesnot change the original arrays.
