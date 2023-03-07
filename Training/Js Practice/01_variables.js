var a=121;
var b="Harshil";

{
    var b="harshild";
    console.log(b);
}
console.log(b);

// output will be harshild in both 

let c=500;
{
    let c=400;
    console.log(c);
}
console.log(c);

// output wil be 400 in 1st and 500 in 2nd

let da=12;
// let da=12; this shows error. This is declaration
da=13; //This is updation.
// let can be updated but not re-updated.

const ac=12;
console.log(ac);