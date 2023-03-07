//* while loop

// while(condition){
//     code to be executed
// }

//! note: If the condition never becomes false, the loop will never end and this migth crash the runtime.

let a=12;
let i =0;
// while(i<a){
//     console.log(i)
//     i++;
// }

//* do-while loop
// ~first block is executed and then the condition is checked . 
// ~It is executed one time

// let a = 1;
// let i = 10;
//  will give 10 one time even if the condition does not match

do{
    console.log(i)
        i++; 
}while(i<a)