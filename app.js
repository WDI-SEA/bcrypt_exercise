// TODOS
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var bcrypt = require('bcrypt');
var saltRounds = 10;
var myPlaintextPassword = readlineSync.question('May I have your password?');
var retypePlaintextPassword = readlineSync.question('Please retype your password.')

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);
//var hashedRetypePassword = bcrypt.hashSync(retypePlaintextPassword, saltRounds)

// Print it out
console.log('Hashed password is', hashedPassword);

var result = bcrypt.compareSync(retypePlaintextPassword, hashedPassword); 
if (result == true) {
	console.log("Your passwords match!")
} else {
	console.log("Your passwords do not match!")
}
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
