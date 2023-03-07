let ar1={

//& key    value
    Name:"Harshil",
    Sname:"Dalal",
    Age:23,
    Gender:"Male",
    City:"Surat",
}

let text = "";
for (let x in ar1) 
//&    key in object
{
 console.log(x+ ":"+ar1[x]);
 //&        key     value
}
