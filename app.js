// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
var bcrypt = require('bcryptjs');
var readlineSync = require('readline-sync');
var saltRounds = 10;

var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';

            
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var passFirst = readlineSync.question('Please enter your password ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});


// Generate the hashed password
var hashedPassword = bcrypt.hashSync(passFirst, saltRounds);
// Print it out
console.log('Hashed password is', hashedPassword);

// Handle the secret text (e.g. password).
var passTwo = readlineSync.question('Please confirm your password ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  
  

// Result will be true if passwords match.
var result = bcrypt.compareSync(passTwo, hashedPassword); 

result? console.log('Authentication successful !'): console.log('Access denied. Passwords (initial and confirmed) do not match');

