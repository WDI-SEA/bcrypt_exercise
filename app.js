// TODOS
// 1. Require bcrypt
var bcrypt = require("bcryptjs");
// 2. Get a password from the user
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');

// 3. Hash the password and store result in a local variable
//var bcrypt = require('bcryptjs');
var saltRounds = 10;
var myPlaintextPassword = readlineSync.question("Hi " + userName + ". May I have your Password? ", {
	hideEchoBack: true
});

// 4. Get another password from the user
var someOtherPlaintextPassword = readlineSync.question('Can you retype to confirm? ', {
	hideEchoBack: true
});

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Print it out
console.log('Hashed password is', hashedPassword);

// 5. If the second password matches the first one, print a success message
var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword); 
console.log("result:", result);
if (result) {
	console.log("Success! Passwords matched");
}
// 6. If the second password does not match the first one, print 'access denied'
else {
	console.log("Failure! Incorrect password");
}