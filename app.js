// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'
var readlineSync = require('readline-sync');
var bcrypt = require('bcrypt');
var saltRounds = 10;

function confirmPassword(){
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
	while(!result){
		var password = readlineSync.question('Enter your Password: ', {
	  		hideEchoBack: true // The typed text on screen is hidden by `*` (default).
			});
		var retypePass = readlineSync.question('Retype your Password: ', {
	 	 	hideEchoBack: true // The typed text on screen is hidden by `*` (default).
			});
		var hashedPassword = bcrypt.hashSync(password, saltRounds);
		var result = bcrypt.compareSync(retypePass, hashedPassword); 
		if(result){
			console.log('Password matched.');
		} else {
			console.log(userName + '! Your Password does not match.');
		};	
	};
};
confirmPassword();

