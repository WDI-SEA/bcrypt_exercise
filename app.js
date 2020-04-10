// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'

var readlineSync = require('readline-sync');
var bcrypt = require('bcryptjs');
var saltRounds = 10;
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var password = readlineSync.question('Please type in a password.', { hideEchoBack: true});
var hashedPassword = bcrypt.hashSync(password, saltRounds);

let retypePassword = readlineSync.question('Please retype your password.', { hideEchoBack: true});

let firstResult = bcrypt.compareSync(password, hashedPassword)
let secondResult = bcrypt.compareSync(retypePassword, hashedPassword)

if (firstResult == secondResult) {
	console.log('Verified')
}
else {
	console.log('Denied')
}

//var myPlaintextPassword = 'password';
//var someOtherPlaintextPassword = 'not_password';

// Generate the hashed password


// Print it out
//console.log('Hashed password is', hashedPassword);

// Result will be true. Passwords match.
//var result = bcrypt.compareSync(myPlaintextPassword, hashedPassword); 

// Result will be false. No match.
//var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword);