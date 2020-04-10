// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'


//var readlineSync = require ('readline-sync');

// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log ('Hi ' + userName + '!')

// var favFood = readlineSync.question('What is your favorite food?', {
//     hideEchoBack: true
// });
// console.log('Oh you love ' + favFood + '!');

var bcrypt = require('bcryptjs');
var saltRounds = 10;
var myPlaintextPassword = 'myPlaintextPassword';
var someOtherPlaintextPassword = 'not_password';

var hashedPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

//Generate the hashed password
console.log('Hased password is', hashedPassword)



//var result = bcrypt.compareSync(myPlaintextPassword, hashedPassword)
//var result = bcrypt.compareSync(someOtherPlaintextPassword, hashedPassword)


//console.log(result)

// var passWord = readlineSync.question('Enter your password please', {
//     hideEchoBack:true
// })
// console.log(passWord)
//console.log(passWord, hashedPassword)



//function logIn = () => {
//     userName;

// }