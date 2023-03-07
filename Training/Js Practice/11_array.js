//^ Array ==> can add multiple types of values in a single array.
let ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, null];

console.log(ar1);
console.log(ar1[10]); //When no value is present , it returns undefined
console.log(ar1.length); //Length of the array.
console.log("--------------------------");
ar1[10] = "Adding a new value"; //Adding a new value
console.log(ar1);
console.log("--------------------------");
ar1[0] = "Changing a value"; //Changing a value
console.log(ar1);
console.log(typeof ar1); // returns object
console.log("--------------------------");

// both for-of and for-in loops can be used
for (let b of ar1) {
  console.log(ar1[b]);
}
console.log("--------------------------");

for (let b in ar1) {
  console.log(ar1[b]);
}

//!Array as a constant is also a good way to declare it.

const a1 = [1, 2, 3, 4, 5, 6];
// a1=[1,2,2.2,4,5,65,6,6];//Throws ana error
//we can change it but can't re-declare it
a1.push("Hello");
console.log(a1);

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)
//* Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  console.log(cars)
  // *Here cars[0] is "Toyota"
}
//* Here cars[0] is "Saab"