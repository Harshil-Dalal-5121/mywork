//* for loop

// let sum = 1;
// let n = 10;

// for (let i = 1; i <= n; i++) {
//   sum *= i;
//   console.log(i + "*" + (i + 1));
// }
// console.log(sum);



// *for-in loop : more in arrays
// can also be used in printing each letter of string

// let obj ={
//     h:1,
//     s:3,
//     v:2,
//     j:10
// }
// for(let a in obj){
//     console.log(a +":"+ obj[a]) ;

// }

// *for-of loop : more in arrays

// for(let a of "Harshil"){
//     console.log(a)
// }


//* Practice in CWH 
let a ={
    l:1,
    k:1,
    j:1,
    m:1,
    o:1,
}
for(let i=0;i<Object.keys(a).length;i++)
{
    console.log(Object.keys(a)[i] +":"+ a[Object.keys(a)[i]]);
}

// Object.keys(a).length ==>no. of key in an object
// Object.keys(a)[i] ==>name of the key in a at ith place
// a[Object.keys(a)[i]] ==> value of key at the ith place