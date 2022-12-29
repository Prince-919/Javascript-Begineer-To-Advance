/* 
1. Register
2. Send welcome email
3. Login
4. Get user data
5. Display user data
*/



// create an function
function waitForThreeSecond() {
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
}

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register end ");
      resolve();
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Send Email end ");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login end ");
      resolve();
    }, 3000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got User Data");
      resolve();
    }, 1000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Data Displayed ");
      resolve();
    }, 1000);
  });
}

// callback function nexting handle

// function calling  Handle - 1
//   register(function () {
//     sendEmail(function () {
//       login(function () {
//         getUserData(function () {
//           displayUserData();
//         });
//       });
//     });
//   });

// Function Promise Return

// Promise handle   Handle - 2
// register()
//     .then(sendEmail)           
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err)=>{
//         console.log('Error : ', err);
//     });

// Promise handle async  Handle - 3

async function authenticate(){
     try{
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
     }catch(err){
        console.log(err);
        throw new Error();
     }
}

authenticate().then(()=>{
    console.log('All Set');
});

// Error Handling
// .catch((err) =>{
//     console.log('Error : ', err);
// })

console.log("Other application work");
