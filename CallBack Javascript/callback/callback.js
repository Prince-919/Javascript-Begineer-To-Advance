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

function register(callback) {
  setTimeout(() => {
    console.log("Register end ");
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("Send Email end ");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("Login end ");
    callback();
  }, 3000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("Got User Data");
    callback();
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User Data Displayed ");
  }, 1000);
}

// function calling
register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("Other application work");
