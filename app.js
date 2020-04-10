// TODOS
// 1. Require bcrypt
// var readlineSync = require('readline-sync');
 
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
// 2. Get a password from the user
// var readlineSync = require('readline-sync');

// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, you love ' + favFood + '!');

// // 3. Hash the password and store result in a local variable
// var bcrypt = require('bcryptjs');
// var saltRounds = 10;
// var myPlaintextPassword = 'password';
// var someOtherPlaintextPassword = 'not_password';

// // Generate the hashed password
// var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// // Print it out
// console.log('Hashed password is', hashedPassword);
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'


var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');


var readlineSync = require('readline-sync');

// Handle the secret text (e.g. password).
var password = readlineSync.question('Would you be able to enter a password? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Thanks! ' + userName + '!');

var bcrypt = require('bcryptjs');
var saltRounds = 10;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Print it out
console.log('Your hashed password is', hashedPassword);


var passwordRetype = readlineSync.question('Can you please re-enter your password? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });

// if (password === passwordRetype) {
//     console.log("Your Password Is Set!")
// }
// else {
//     console.log("Your Passwords do not match");
//     var passwordRetype = readlineSync.question('Can you please re-enter your password? ', {
//         hideEchoBack: true // The typed text on screen is hidden by `*` (default).
//       });
//       if (password === passwordRetype) {
//         console.log("Your Password Is Set!")
//     }
//     else {
//         console.log("Your Passwords do not match");
//     }
// }
count = 1

while (password != passwordRetype && count <5){
    console.log("the passwords do not match");
    passwordRetype = readlineSync.question('Can you please re-enter your password? ', {
        hideEchoBack: true  // The typed text on screen is hidden by `*` (default).

      });
      count++
}

if(count > 5) {
  console.log('Please refresh the page and try again...');
}

if (password == passwordRetype) {
    console.log('Your Password is set!');
}