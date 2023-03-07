//  using simple for loop
let num = [3, 4, 5, 1, 3, 4];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
console.log("=========================");
// Another method using foreach()
//* ForEach() is a method not a loop.
//^Cant be used on object
num.forEach((ele) => {
  console.log(ele + 1);
});

console.log(num);

console.log("=========================");

//Array from method used to convert any thing into an array.

let aaa = "Harshil";
let ar1 = Array.from(aaa);
console.log(ar1); //Each letter becomes an array element.

console.log("=========================");

// We know the use of for..of loop

// Using for..in loop
for (let i in num) {
  // console.log(i);
  //As we know that for..in loop retuens the keys in an object so similiarly it returns the index values in the the array as it is the value of the array.

  console.log(ar1[i].toUpperCase()); // returns HARSHI
}
