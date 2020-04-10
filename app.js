// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'

var bcrypt = require('bcryptjs');
var saltRounds = 10;

var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var password = readlineSync.question('May I have your password? ');



var hashedPassword = bcrypt.hashSync(password, saltRounds);

// Print it out
console.log('Hashed password is', hashedPassword);
var newPass = readlineSync.question('May I have your password again? ');


// Result will be true. Passwords match.
var result = bcrypt.compareSync(newPass, hashedPassword); 

if (result) {
	console.log('Thank you, passwords match')
} else {
	console.log('access denied')
}


