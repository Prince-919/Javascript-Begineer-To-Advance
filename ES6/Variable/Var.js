
// Function Scope hota h var keyword

// Problem 1

var age = 18;

if(age >= 18){
    var driving =true;
}

console.log(driving);

// Problem 2
 
function employee(){
    var username = 'prince';
    var password = 'secret';
}
//ReferenceError: username is not defined  
// console.log(username);

// Problem 3

var product = 'Laptop';
var product = 'Mobile'; // using overriding var variable 

console.log(product);

// Problem 4

// Go to Browser then inspect go to console then type window.product

// problem 5

console.log(a);  //undefined - (Hoisting use console)
var a = 10;




