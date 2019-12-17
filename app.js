// Ask the user for a name
// Print "hi" + user's name
// Ask the user for a password
// Hash the password the user gives and store it in a local variable
// Ask the user to type in their password again
// Compare the hashed password to the retyped in password.
// Depending on whether the user typed in the same password or a different one, print out an appropriate message.

var readlineSync = require('readline-sync');
var bcrypt = require('bcryptjs');
var saltRounds = 10;


var userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '!');

var password = readlineSync.question('Set a password ',
    {hideEchoBack: true}
);

var hashedPassword = bcrypt.hashSync(password, saltRounds);

var verifyPassword = readlineSync.question('Verify your password ',
    {hideEchoBack: true}
);

var result = bcrypt.compareSync(verifyPassword, hashedPassword);

if (result) {
    console.log('You verified your password correctly! Welcome!')
} else {
    console.log('Your password is incorrect! Access denied!')
}
