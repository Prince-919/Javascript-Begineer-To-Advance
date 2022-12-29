
console.log('Start');
function waitForsevenSecond(){
    let ms = 7000 + new Date().getTime();
    while(new Date() < ms){}
}
setTimeout(() =>{
    console.log('I am from timeout');
});
waitForsevenSecond();

