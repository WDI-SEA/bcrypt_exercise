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
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';



var userName = readlineSync.question('May I have your username? ');
console.log('Hi ' + userName + '!');

var secretCode = readlineSync.question('What is your Code ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

var secretCodeTwo = readlineSync.question('confirm your password ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});


var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

var result = bcrypt.compareSync(myPlaintextPassword, hashedPassword);


  if(secretCode == secretCodeTwo) {
    console.log('You passed ' + userName)
  }else {
    console.log('I am calling the cops!')
  }

