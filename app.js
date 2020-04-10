// TODOS
// 1. Require bcrypt
var bcrypt = require('bcryptjs')
var saltRounds = 10;
// 2. Get a password from the user
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var password = readlineSync.question('Hi ' + userName + '. What is your password? ', {
    hideEchoBack: true
})
// 3. Hash the password and store result in a local variable
var hashedPassword = bcrypt.hashSync(password, saltRounds)
// 4. Get another password from the user
var secondPassword = readlineSync.question('Coo. Now, go ahead and type it in again. ', {
    hideEchoBack: true
})
var secure = bcrypt.compareSync(secondPassword, hashedPassword);
// 5. If the second password matches the first one, print a success message
if (secure) {console.log("Great! Your passwords match!")}
// 6. If the second password does not match the first one, print 'access denied'
else {console.log("Um... Yeah, no, that was something different.")};

