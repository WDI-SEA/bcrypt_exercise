// TODOS
var bcrypt = require('bcryptjs');
var saltRounds = 10;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

// 1. Require bcrypt
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// 2. Get a password from the user
var userPassword = readlineSync.question('What is your password? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });

// 3. Hash the password and store result in a local variable
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// 4. Get another password from the user
var userTestPassword = readlineSync.question('What is your password? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
var readlineSync = require('readline-sync');
