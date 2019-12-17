// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'


var readlineSync = require('readline-sync');
var bcrypt = require('bcryptjs'); 

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var password = readlineSync.question('Enter password: ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });

var saltRounds = 10;
var myPlaintextPassword = password;

var passwordVerify = readlineSync.question('Enter password again: ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
var someOtherPlaintextPassword = passwordVerify;

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Print it out
//console.log('Hashed password is', hashedPassword);

//var result = bcrypt.compareSync(myPlaintextPassword, hashedPassword);
var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword); 
if (result) {
    console.log(`Thanks ${userName}! You are logged in.`)
} else {
    console.log(`Sorry ${userName}, you're passwords don't match. `)
}