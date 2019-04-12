// TODOS
// 1. Require bcrypt
var readlineSync = require('readline-sync');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
// 2. Get a password from the user
var password = readlineSync.question('What is your password? ', {
  hideEchoBack: true 
});
// 3. Hash the password and store result in a local variable
var hashedPassword = bcrypt.hashSync(password, saltRounds);
var result = bcrypt.compareSync(password, hashedPassword); 
// 4. Get another password from the user
var passwordConfirm = readlineSync.question('Please confirm your password? ', {
  hideEchoBack: true 
});
var resultConfirm = bcrypt.compareSync(passwordConfirm, hashedPassword); 
// 5. If the second password matches the first one, print a success message
if (result === resultConfirm) {
	console.log('success')
// 6. If the second password does not match the first one, print 'access denied'
} else if (result != resultConfirm) {
	console.log('access denied')
}