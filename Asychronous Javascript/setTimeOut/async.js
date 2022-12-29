
// Running state 
// Call Stack --> Web Apis --> Callback Queue --> CallStack
console.log("I am Running First");

function greeting(){
    console.log('I am from setTimeOut.');
}

setTimeout(greeting, 3000);

console.log("Hello Asynchronous");