// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'

let readlineSync = require('readline-sync');
let bcrypt = require('bcryptjs');
let saltRounds = 10;
// Wait for user's response.
let userName = readlineSync.question('What is your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
let password = readlineSync.question('What is your password? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
let hashedPassword = bcrypt.hashSync(password, saltRounds);
console.log('Ok!');

// Print it out
console.log('Hashed password is', hashedPassword);

let verify = readlineSync.question('Type that in again for me! ', {
    hideEchoBack: true
});
let result = bcrypt.compareSync(verify, hashedPassword);

// Print it out
console.log('Hashed password is', hashedPassword);

if (result){
    console.log('Thanks!')
}else {
    console.log('That is not right!')
}
