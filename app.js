// TODOS
// 1. Require bcrypt
var bcrypt = require('bcrypt');
var readlineSync = require('readline-sync');

var saltRounds = 10;

// Generate the hashed password
var getName = readlineSync.question('What\'s your name?')
console.log('Hi' + getName + '!')

// 2. Get a password from the user
var userPass = readlineSync.question('password:', {
  hideEchoBack: true
})

// 3. Hash the password and store result in a local variable
var userHash = bcrypt.hashSync(userPass, saltRounds)

// 4. Get another password from the user
var checkPass =  readlineSync.question('re-enter password:', {
  hideEchoBack: true
})
// 5. If the second password matches the first one, print a success message
var result1 = bcrypt.compareSync(userPass, userHash);
var result2 = bcrypt.compareSync(checkPass, userHash)

if (result1==true&&result2==true) {
  console.log('Login Successful!');
}
else{
  console.log('Access Denied')
}

// 6. If the second password does not match the first one, print 'access denied'
