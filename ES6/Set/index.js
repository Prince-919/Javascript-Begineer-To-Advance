

// Set 

const uniqueNumber = new Set();
uniqueNumber.add(3);
uniqueNumber.add(5);
uniqueNumber.add(6);
uniqueNumber.add(3);
console.log(uniqueNumber);
console.log(`Size of = ${uniqueNumber.size}`);
console.log(`Find of Element = ${uniqueNumber.has(5)}`);


// Arrays

const numbers = [4,5,6,4,7,6];
const uniqueNumbers = new Set(numbers);
console.log(Array.from(uniqueNumbers));