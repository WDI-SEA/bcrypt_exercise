var bcrypt = require('bcrypt');
var saltRounds = 10;
var myPlaintextPassword = 'password';
var someOtherPlaintextPassword = 'not_password';
var readlineSync = require('readline-sync');


var userName = readlineSync.question('Enter your name: ');
console.log('HI' + userName + '!');

var userPassword = readlineSync.question('Enter your password: ',{
	hideEchoBack: true
})
console.log("Password saved")


var secPassword = readlineSync.question('Enter password again: ',{
	hideEchoBack: true
})
console.log("Password saved")

var hashedPassword = bcrypt.hashSync(userPassword, saltRounds);

var pass = bcrypt.compareSync(userPassword, hashedPassword);
var secPass = bcrypt.compareSync(secPassword, hashedPassword);



var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('')


if(bcrypt.compareSync(userPassword, hashedPassword)){
	console.log('Passowords are a match')
} else {
	console.log('Passwords do not match')
}