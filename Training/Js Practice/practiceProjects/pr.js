let str="axelor india";

const capitalize =(x)=>{

    const arr=x.split(" ");
    for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);        
        }

        let y= arr.join(" ");
        return y;
        

}
console.log(capitalize(str));