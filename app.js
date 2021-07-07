// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'


var bcrypt = require('bcrypt');
var readlineSync = require('readline-sync');
 

var saltRounds = 10;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var userPass = readlineSync.question('Please enter a password ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(userPass, saltRounds);

var retypedPass = readlineSync.question('Please enter your password again ', {
	hideEchoBack: true
});

//Generate a hashed version of the re-typed password
var hashedRetyped = bcrypt.hashSync(retypedPass, saltRounds);

if (userPass === retypedPass) {
	console.log('Passwords match.');
} else {
	console.log('Passwords do not match. Access denied.');
};

// if (hashedPassword === hashedRetyped) {
// 	console.log('Hashed passwords match. Wait, what?');
// } else {
// 	console.log('Of course the hashed passwords do not match.');
// };



// Print it out
console.log('');
console.log('Hashed password1 is', hashedPassword);
console.log('Hashed password2 is', hashedRetyped);