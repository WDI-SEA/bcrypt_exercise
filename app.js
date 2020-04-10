// TODOS
// 1. Require bcrypt
let readlineSync = require('readline-sync');
let bcrypt = require('bcrypt');
let saltRounds = 10;

// 2. Get a password from the user
let firstTyped = readlineSync.question('Please set a password: ');
console.log(`Your pw will be ${firstTyped}!`);

// 3. Hash the password and store result in a local variable
let hashedPassword = bcrypt.hashSync(firstTyped, saltRounds);
console.log('Hashed password is', hashedPassword);

// 4. Get another password from the user
let secondTyped = readlineSync.question('Please retype your password to set: ', {
  hideEchoBack: false
});

// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
if (bcrypt.compareSync(secondTyped, hashedPassword)) {
  console.log("Nice match. Welcome!");
} else {
  console.log("No match. Try again!");
}
