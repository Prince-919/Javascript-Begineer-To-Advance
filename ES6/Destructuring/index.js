
// Object Destructuring

const user = {
    name : 'John Doe',
    age : 30,
}
// Old javascript access
// console.log(user.name);
// console.log(user.age);

// New ES6 access

// const {name , age} = user;
const {name : fullName , age} = user;
console.log(fullName);
console.log(age);


// Arrays Destructuring

const data = ['Prince', 22, 'Engineer'];
// ES6
const [name, ages, profession] = data;
console.log(name);



