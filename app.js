// TODOS
// 1. Require bcrypt
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ', {
}); 
console.log('Hi ' + userName + '!');

// 2. Get a password from the user
var userPassword = readlineSync.question('Please enter your password: ', {
	hideEchoBack: true
});

// 3. Hash the password and store result in a local variable
var bcrypt = require('bcrypt');
var saltRounds = 10;
var hashedPassword = bcrypt.hashSync(userPassword, saltRounds);

// 4. Get another password from the user
var userPasswordConfirmation = readlineSync.question('Please confirm your password: ', {
	hideEchoBack: true
});
var passwordConfirmationCheck = bcrypt.compareSync(userPasswordConfirmation, hashedPassword)

// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
if(passwordConfirmationCheck){
	console.log('Password Accepted');
}
else if(!passwordConfirmationCheck){
	console.log('Access Denied')
}