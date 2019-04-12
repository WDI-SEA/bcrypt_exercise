// TODOS
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, you love ' + favFood + '!');
// 1. Require bcrypt
var bcrypt = require('bcrypt');

var saltRounds = 10;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

// 2. Get a password from the user
var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Hashed password is', hashedPassword);

// 3. Hash the password and store result in a local variable
var newHashed = $2b$10$PUZy/I.ekXDQyCJs3SoUge1EkBpE51t6R9tpDojEIxPmxGvpVOBeO

// 4. Get another password from the user
var secondNewHashed = $2b$10$35hLs9XrAfKXjjeyjAAM4e9RLeRIWQAEnB6zIrcfAPiEEJKETPcwe

// 5. If the second password matches the first one, print a success message
if (newHashed === secondNewHashed) {
  console.log('Success!')
}else {
  // 6. If the second password does not match the first one, print 'access denied'
  newHashed!== secondNewHashed
    console.log('Access denied')
  }


