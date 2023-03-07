//! Children of an element :
//~ Direct as well as deeply nested elements of ana element are called its children

// ^ Child nodes:Element ==>that are direct children of an element are called its child nodes
//Example : <head> and <body> are children of the <HTML> tag.

//^Decendant Nodes ==> All nested elements,children ,thier children and so on.....

//! First child, last Child and child nodes

console.log(document.body.firstChild);
//?Output
//  comment node : <!-- <script src="00_Introduction.js"></script> -->
let h1 =document.head.childNodes
console.log(h1); 
let h2=Array.from(document.head.childNodes)
console.log(h2);//Converted into array 

//?output :- Object.


//! childnodes looks like n array but it is not an array instead it is a collection.

let t=document.getElementsByClassName("test1")[0];
console.log(t); 
//& As we know that class can be applied to more than one elements in the html so we need to specify by giving it the element number to output for hasChildNodes().
//& But Id is applied to a single element so it gets the output for hasChildNodes().


//! DOM (HTML) collection 
//* They are read-only
//*They are live and will be automatically updated if the childNodes is changed
//*They can iterable using for loop
//! getElementsByClassName and getElementsByTagName always gives HTML collection .
//! That's why it needs to be converted in Array before performing iteration
//*---------------------------------------------- iterating the classname 

// let t=document.getElementsByClassName("test1");
let t1 = Array.from(document.getElementsByClassName("test1"))
console.log(t1);// Coverting codecttion into arrray


let answer=document.head.hasChildNodes(); 
console.log(answer);



//^Using For loop
// for(var i =0; i<t1.length;i++){
    //     t1[i].style.border='2px solid black'
    // }
    
    //^Using For each method
    t1.forEach((ele)=>{
        ele.style.border='2px solid black'
    })
    
    //^Using For in loop
    for (let i in t1){
        t1[i].style.border='2px solid blue'
        t1[i].style.margin='20px'
    }