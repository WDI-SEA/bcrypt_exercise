var readlineSync = require('readline-sync');
var bcrypt = require('bcrypt');
var saltRounds = 10;

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var userPw= readlineSync.question('What is your password? ');

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(userPw, saltRounds);

var userRePw= readlineSync.question('Can you type your password again? ');

//compare with hasedpassword
var result = bcrypt.compareSync(userRePw, hashedPassword);

//message per situation
if (result){
	console.log("your passwords matched!");
} else{
	console.log("ERROR! retype your passwords");
}

