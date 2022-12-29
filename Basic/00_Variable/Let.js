
// Let Variable 
// Let Block Scope
/*
{
    Block Scope
}
*/

let x = 30;
let languageName;
languageName = 'Javascript';
console.log(languageName);
console.log(x);

// Example Block Scope

if(true){
    let age = 22;
    console.log(age);
}
// console.log(age);  // error age is not defined