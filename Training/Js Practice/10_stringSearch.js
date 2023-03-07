//&String Search

//* ==>String indexOf()
//* ==>String lastIndexOf()
//* ==>String search()
//* ==>String match()
//* ==>String matchAll()
// *==>String includes() ->returns true or false if the string is present in the given string
// *==>String startsWith()->returns true or false if the string starts with the give string
// *==>String endsWith()->returns true or false if the string ends with the give string

//~ String indexOf()==>The indexOf() method returns the index of (position of) the first occurrence of a string in a string

let str = "Please locate where locate occurs!";
console.log(str.indexOf("locate"));
console.log(str.indexOf("Harshil"));
//when not found it returns -1
console.log(str.indexOf("locate", 5));
//Search from start to to 5th index to the end ,when not found it returns -1

// ~lastIndex()==>start the search from the backwards
console.log(str.lastIndexOf("locate"));
console.log(str.lastIndexOf("locate", 5));
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 5, the search starts at position 15, and searches to the beginning of the string.

//~search()==>similiar to indexOf but it can search using regular expression which indexOf can't.
// The search() method cannot take a second start position argument.
console.log(str.search(/locate/g));

const paragraph1 =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// Any character that is not a word character or whitespace
const regex1 = /[^\w\s]/g;

console.log(paragraph1.search(regex1));
//Gives the index no at where the regex is found
// Expected output: 43

console.log(paragraph1[paragraph1.search(regex1)]);
//Returns what is found at the index
// Expected output: "."

// ~match() method

const str1 = "The rain in SPAIN stays mainly in the plain";
// const re = "ain";//used for finding first match
// const re = /ain/g;//used to find every posiible match
const re = /ain/gi; //used to find every posiible match but case insensitive

const found = str1.match(re);

console.log(found);
