// TODOS
// 1. Require bcrypt
var readlineSync = require('readline-sync');
var bcrypt = require("bcrypt");
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// 2. Get a password from the user
var password = readlineSync.question('Please put in your password ', {
  hideEchoBack: true
});

// 3. Hash the password and store result in a local variable
var saltRounds = 10;
var hashedPassword = bcrypt.hashSync(password, saltRounds);

function passwordVerify(storedPass) {
  // 4. Get another password from the user
  var verify = readlineSync.question('Please verify your password ', {
    hideEchoBack: true
  });
  // 5. If the second password matches the first one, print a success message
  // 6. If the second password does not match the first one, print 'access denied'
  var result = bcrypt.compareSync(verify, storedPass);
  
  if (result) {
    console.log("Great! Passwords verified!");
  } else {
    console.log("ACCESS DENIED loser");
    passwordVerify(storedPass)
  }
}
passwordVerify(hashedPassword);
