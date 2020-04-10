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
var password = readlineSync.question('What is your password? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
var hashedPassword = bcrypt.hashSync(password, saltRounds);
console.log('Ok!');

var verify = readlineSync.question('May I have your password one more time?', {
    hideEchoBack: true
});
var result = bcrypt.compareSync(verify, hashedPassword); 

if (result){
    console.log('Thanks!')
}else {
    console.log('Hmmm, that doesn\'t seem to match')
}
