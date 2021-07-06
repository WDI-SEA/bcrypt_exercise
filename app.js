// TODOS
// 1. Require bcrypt
var bcrypt = require('bcryptjs');
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name?');
console.log("Hi " + userName + "!");
// 2. Get a password from the user
var saltRounds = 10;
var myPlaintextPassword = readlineSync.question('What is your password?', {
	hideEchoBack: true
});

// Wait for user's response.

// 3. Hash the password and store result in a local variable
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Hashed password is', hashedPassword);
// 4. Get another password from the user
var someOtherPlaintextPassword = readlineSync.question("Please type your password again:", {
	hideEchoBack: true
});

var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword);
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
if (result) {
	console.log("The passwords match!")
} else {
	console.log("Access Denied: you dun goofed");
}
