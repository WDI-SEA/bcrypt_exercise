// TODOS

// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'


var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your username? ');
console.log('Hi ' + userName + '!');


var readlineSync = require('readline-sync');

// Handle the secret text (e.g. password).
var password = readlineSync.question('What is your password ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

var password2 = readlineSync.question('confirm your password ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});


var bcrypt = require('bcryptjs');
var saltRounds = 10;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Print it out
var result = bcrypt.compareSync(myPlaintextPassword, hashedPassword);

function displayText() {
  if(password === password2) {
    console.log('welcom in ' + userName)
  }else {
    console.log('Get Lost!')
  }
}

displayText()
