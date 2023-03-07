//&String Methods

//*slice methods ===>s the name suggests it used to give a sliced string of original string.

let s1 = "Harshil";

console.log(s1.slice(2, 6));
console.log(s1.slice(3));
console.log(s1.slice(-7, -3));
console.log(s1.slice(-4));
// This function uses 2 inputs as parameter (start,end)
// ==> In this way, start in included but the end is excluded.
// ==> In the next way only start is mentioned and the rest of the string is printed.
// ==> Next Both ways with negative values , the string starts from the end.

//*Replace method ==> it replaces a specified value with another value in a string

let s2 = "This is a Bad Morning and a Bad time for the Bad boy.";
console.log(s2.replace("Bad", "Good"));

// ==>The replace() method does not change the string it is called on.
// ==>The replace() method returns a new string.
// ==>The replace() method replaces only the first match.
// ==> For this , we need to use replaceAll()

console.log(s2.replaceAll("Bad", "Good"));

//*toUpperCase() ==> used to convert each letter in uppercase.
console.log(s2.toUpperCase());
//*toLowerCase() ==> used to convert each letter in lowercase.
console.log(s2.toLowerCase());

//*concat() ==> joining two more strings.The concat() method can be used instead of the plus operator.
let a = "This";
let b = "is";
let c = "a";
let d = "box";
console.log(a + " " + b + " " + c + " " + d);
console.log(a.concat(" ", b, " ", c, " ", d));

//  *trim ==> used to trim out the white spaces before and after the string. 2 methods.
//trim() ; trimStart() ;trimEnd()

let s3 = "      Happy birthday      ";
console.log(s3.trim());
console.log(s3.trimStart());
console.log(s3.trimEnd());

// *charAt() ==> used to return the charcter on that specific index in the string

let s4 = "Happy Birthday Harshil";
console.log(s4.charAt(6));

// A string can be converted to an array with the split() method:

//* split() ==>A string can be converted to an array with the split() method
// it uses some input and splits the string from that input
// ==> If the separator is omitted, the returned array will contain the whole string in index [0].

// ==>If the separator is "", the returned array will be an array of single characters:
let text = "Hello";
const myArr = text.split("");
console.log(myArr);
let str = "axelor india";
console.log(str.split(" "));
