

// Promises

// function login(callback){
//     setTimeout(() =>{
//         console.log('Login...');
//         callback();
//     },0);
// }

// login(() =>{
//     console.log('Redirecting...');
// });


function login(){
     return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('Login...');
            // resolve();
            reject();
        },0);
     })
}

login().then(()=>{
    console.log('Redirecting...');
}).catch((err) => {
    console.log('Error..');
 });

 
