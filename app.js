// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'

// required 
let readlineSync = require('readline-sync')
let bcrypt = require('bcryptjs')
var saltRounds = 10;
 
// Wait for user's response.
let userName = readlineSync.question('May I have your name? ')
console.log('Hi ' + userName + '!')

// Request the password, for the first time
let firstPasswordEntry = readlineSync.question('What is your password? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
})
let hashedPassword = bcrypt.hashSync(firstPasswordEntry, saltRounds);

console.log('Hashed Password is  ' + hashedPassword );

// Request the password again, to chek against the first entry
let secondPasswordEntry = readlineSync.question('Pleae re-enter your pasword: ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  })

  // run compareSync to validate or deny
    let result = bcrypt.compareSync(secondPasswordEntry, hashedPassword); 
    if (result) {
         console.log('Password Verified; Please Continue!')
    } else {
        console.log('Your Passwords Do Not Match; Please Try Again...')
    }
  