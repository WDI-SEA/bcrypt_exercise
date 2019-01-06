// TODOS
// 1. Require bcrypt
var readlineSync = require('readline-Sync');
var bcrypt = require('bcrypt');
var saltRounds = 10;

var userName = readlineSync.question('May I have your name? ');
console.log("Hi " + userName + "!");

// 2. Get a password from the user
var userPassword = readlineSync.question('Please enter a password ', {
	hideEchoBack: true // The typed text on screen is hidden by * (default).
});

// 4. Get another password from the user
var userPassword_verify = readlineSync.question('Please enter your password again ', {
	hideEchoBack: true
});

// 3. Hash the password and store result in a local variable
var hashedUserPassword = bcrypt.hashSync(userPassword, saltRounds);

var result = bcrypt.compareSync(userPassword, hashedUserPassword);
var resultTwo = bcrypt.compareSync(userPassword_verify, hashedUserPassword);

// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
function checkForMatch() {
	console.log( result && resultTwo ? "Passwords match!" : "Access denied" )
}

checkForMatch();