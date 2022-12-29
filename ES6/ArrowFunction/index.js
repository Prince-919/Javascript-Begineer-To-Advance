
// Normal Function
function greet(){
    console.log("Good Morning");
}

// Fat Arrow Function

// Simple One
const add = (a,b) =>{
    console.log(a+b);
}

// Simple 2 
const sub = (a,b) => console.log(a-b);

// Simple 3 
const mul = a => console.log(a*a);

greet();
add(1,2);
sub(10,4);
mul(2);