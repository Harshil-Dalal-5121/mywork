//Sort Function ==> used to sort elements in the array may it alphbeticallly or numerically.

let num=[78,58,98,1,5,74,2,84,4,85,6];
let a= ["dsdf","fhdery","jgyt","vbft","lifgjh","dfyretu","kyukd"]

//Max and min

const min=(arr)=>{
    return Math.min.apply(null,arr);
}

const max=(arr)=>{
    return Math.max.apply(null,arr);
}

console.log(`The minimum number in array is ${min(num)}`);
console.log(`The maximum number in array is ${max(num)}`);

console.log(num.sort());
//Ths sorts array ascendingly
//It does the change in original array

console.log(a.sort());
//Ths sorts array ascendingly

// if we want to sort array in a specific  manner than we can add the comparing parameter in the braket 

// Example: Sort array in descending order

const compare=(a,b)=>{
    return b-a;//a is the 1st element and b is the second element .the diffrence is used to sort the array
}

console.log(num.sort((a,b)=>{
    return b-a;
}));


//reverse()
// console.log(num.reverse());
