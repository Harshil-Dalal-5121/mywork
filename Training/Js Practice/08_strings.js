//* Stings are immuteable that means that it can never be changed
//* this method just perform operation on the string's copy and not on the original srting

let a = `Harshil`;
let b = `Dalal`;
let c = `${a} ${b}`;
console.log(c);

// *Escape sequence \

let d = `banan\oa`;
console.log(d);

for (let h in a) {
  console.log(a[h]);
}

let ac = `harshil`;
let bbc = ac.replace(a[3], "j");
console.log(bbc);
