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
var userName = readlineSync.question('what is your username? ');
console.log('Hi ' + userName)
var passcode = readlineSync.question('what is your password? ', {
    hideEchoBack: true
});
let hashedpass = bcrypt.hashSync(passcode, saltRounds)
var passcode2 = readlineSync.question('please retype your password? ', {
    hideEchoBack: true
});
let result2 = bcrypt.compareSync(passcode2, hashedpass)


if (result2 === true) {
    console.log('congrats ' + userName + ' your passwords match')
} else {
    console.log('sorry ' + userName + ' your passwords do not match')
}
