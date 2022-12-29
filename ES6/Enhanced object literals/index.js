

// Enhanced object literals
// computed properties keys

const keyName = 'name';
const product = {
    [keyName] : 'Mobile',
    price : 100,
}

console.log(product);


// method definition  shorthand
// Old Javascript 
const shop ={
    buy : function(){
        console.log("Hello I am Javascript");
    }
}

// ES6 
const shop2 = {
    buy(){
        console.log("Hello I am ES6");
    }
}
shop2.buy();


// Property Shorthand


const accessToken = 'wgygyedhdbwhb';
const refreshToken = 'dshbgdvdav';

// Old Javascript
const user = {
    accessToken :  accessToken,
    refreshToken : refreshToken,
}

const user2  ={
    accessToken,
    refreshToken,
}
console.log(user);


