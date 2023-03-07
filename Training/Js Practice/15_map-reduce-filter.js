// *Higher Order Array Methods

//&Array Map Method
let a = [46, 29, 78, 45, 56];
console.log(a);
let map_a = a.map((value, index, array) => {
  // console.log(value,index,array)
  //We can use value ,index and array as the parameters for map as well as for..each
  return value + 1;
  // return value+index;
});
console.log(map_a);

a.forEach((ele) => {
  return ele + 1;
});
console.log(a);

// for (let i=0;i<a.length;i++){
//     a[i]=a[i]+1;
    // return a;
// }

//As we see here , there is no modification to original array.
// A new array is formed.

//Diffrence between For..each and map

// ==>The map() method returns a new array, whereas the forEach() method does not return a new array.

// ==>The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

// ==>The map() method can be used with other array methods, such as the filter() method, whereas the forEach() method cannot be used with other array methods.

//&Filter Method:returns a new array which contains all filtered values.
//No modification to original array

console.log(
  a.filter((a) => {
    return a > 45;
  })
);

//Reduce method : used to reduce the elements in the array one by one.to a single value.
console.log("================");
console.log(
  a.reduce((a, b) => {
    return a + b; //adding the numbers one by one and reducing the used elements from the array
  })
);
console.log(a);

//  Practice Questions
// Adding a number into the array using user input {prompt}

// let ar = [1,2,3,4,5];
// let p = +prompt("Enter num:");
// ar.push(p);
// alert(`${ar}`);

// Adding the number into the array until 0 is added to it

//My answer where zero is removed using pop()
// let ar = [1, 2, 3, 4, 5];
// let p;
// Using do-while loop/
//  do{
//     p = +prompt("Enter num:");
//     ar.push(p);
//   }while (p != 0)
//   ar.pop();

//Nishant Sir's Answer
// Flag is used  as a checking statement.
// let ar = [];
// let p;
// let flag = 1;
// Using do-while loop
//  do{
//     p = +prompt("Enter num:");
//     p=== 0 ? flag = 0 : ar.push(p);
//   }while (flag)
// --------------------------------------------------
//Using While loop
//   while (p != 0) {
//     p = +prompt("Enter num:");
//     ar.push(p);
//   }
// console.log(ar);

let ar2 = [100, 235, 450, 500, 68, 203, 4560, 700, 23, 10];
// let a2=ar2.filter((x)=>{
//     return x%10 ==0;
// })

// console.log(a2);

const sq1=(a)=>{  
        return a*a;   
}
let sq_a=ar2.map(sq1);

console.log(sq_a);

let ar1=[1,2,3,4,5,6,7,8,9,10]
let fact = ar1.reduce((a,b)=>{
    return a*b;
});


//Using a seperate function
function myFunction(a,b) {
    return a*b;
  }

 let fact1=ar1.reduce(myFunction)

console.log(fact1);
