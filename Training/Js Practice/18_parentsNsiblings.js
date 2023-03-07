//Parent and sibling Nodes
a=document.body.firstChild
c=document.getElementById("btn");
b=document.getElementById("div");
console.log(a);
console.log(b);
console.log(a.parentNode);//Parent node will return anything such as text node comment etc.
console.log(a.parentElement);// parent Element will Always return an element only.

console.log(b.parentNode)
console.log(b.parentElement);
console.log(c.previousSibling) ;//^Used for getting the next sibling in the line
console.log(b.nextSibling) ;//^Used for getting the next sibling in the line

console.log(a.childNodes);