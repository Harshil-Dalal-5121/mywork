//! DOM ==> Document object Model
//~ Entire HTML page is a converted into js object is named as Document.
//~represents the page content as HTML

// console.log(window);
// console.log(document.body);

//! BOM ==> Browser object Model
//~ Additional objects by the browser for working with everything except the document.
//~ alert/prompt/confirm are parts of BOM

// let flag = true;
// while (flag) {
// ^    let a = +prompt("Enter your age:");
//     if (a < 0) {
//       console.error("Enter a valid Age");
//       break;
//     }else
//   a >= 18 ? alert("Yes, you can Drive") : alert("No you can't drive");
//   flag = confirm("Do you want to see it again?");
// }

// *let a = +prompt("Enter a number")
// a>=4? location.href="https://google.com":alert(`Enter a num greater than 4`);


let color=prompt("Enter the color you want?")
document.body.style.background=color;