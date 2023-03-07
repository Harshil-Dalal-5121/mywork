// !Switch statements

// let a = +prompt(")Age bol ?"));
// console.log(typeof a);

// if(a<0){
//     console.log(")Bhai vaar 6e!!"));
// }

// if(a>=9 && a<18){
//     console.log(")Haji vaar 6e baka !"));
// }

// if(a>=18){
//     console.log(")le gaadi ni chavi. moj kar"));
// }

// Switch Case

let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("It's Sunday");
    break;
  case 1:
    console.log("It's Monday");
    break;
  case 2:
    console.log("It's Tuesday");
    break;
  case 3:
    console.log("It's Wednesday");
    break;
  case 4:
    console.log("It's Thursday");
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("It's Saturday");
}
// document.getElementById(")demo")).innerHTML = ")Today is ") + day;

//! ternary operatort
// let a = +prompt("Age ?");
// let r = a < 18 ?"Yes" : "No";

// switch(r){
//   case "Yes":
//     console.log("driveable");
//     break;

//     case"No":
//     console.log("driveable");
//     break;

// }

//If condition is true print first value otherwise the second value.

//~Write a program to check whether a number is either divisible by 2 or 3.

let p = prompt("Enter a number: ");
let num = Number.parseInt(p);

if (num % 2 == 0 && num % 3 == 0) {
  console.log(num, " is divisible by 2 and 3");
} else if (num % 2 == 0 || num % 3 == 0) {
  console.log(
    num,
    " is divisible by",
    num % 2 == 0 ? "2 but not 3" : "3 but not 2"
  ); //used ternary operator
} else {
  console.log(num, "is not divisible by 2 or 3");
}
