

// For of Loop
// Arrays
const numbers = [2,5,3,4,6,7];

for(const num of numbers){
    console.log(num);
}

// String

const language = 'Javascript';
for(const str of language){
    console.log(str);
}

// Object 

const person = {
    name : "Prince",
    city : "Bihar",
    brand : "apple",
}
// Method 1
// for(const per of Object.entries(person)){
//     console.log(per);
// }

for(const [key,value] of Object.entries(person)){
    console.log(key,value);
}

