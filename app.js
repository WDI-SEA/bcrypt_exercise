// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'

var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  console.log('Oh, you love ' + favFood + '!');

var bcrypt = require('bcryptjs');
var saltRounds = 2;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// Print it out
console.log('Hashed password is', hashedPassword);

var result = bcrypt.compareSync(myPlaintextPassword, hashedPassword); 
var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword); 
