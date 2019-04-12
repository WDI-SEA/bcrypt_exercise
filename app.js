// TODOS
// 1. Require bcrypt
var readlineSync = require('readline-sync');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var myPlaintextPassword
var someOtherPlaintextPassword

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
// 2. Get a password from the user
myPlaintextPassword= readlineSync.question('May I have your password? ',{
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
})
// 3. Hash the password and store result in a local variable
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);
// 4. Get another password from the user
someOtherPlaintextPassword = readlineSync.question('Please confirm your password ',{
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
})

var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword);
// 5. If the second password matches the first one, print a success message
result ? console.log('acces approved') : console.log('acces denied');
// 6. If the second password does not match the first one, print 'access denied'
