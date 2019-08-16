const bcrypt = require('bcryptjs');
const readlineSync = require('readline-sync');
const saltRounds = 10;
let result;

let userName = readlineSync.question('May I have your name?');
console.log(`Hi, ${userName}. All your passwords will be mine!`);

while (!result) {
  let pwd = readlineSync.question('What is the master password to your password manager? ', {
    hideEchoBack: true
  });

  let comparisonPwd = readlineSync.question(`Let's make sure we got it right. Please enter it again.`, {
    hideEchoBack: true
  });

  let hashedPwd = bcrypt.hashSync(pwd, saltRounds);
  let result = bcrypt.compareSync(comparisonPwd, hashedPwd);

  if (result) {
    console.log(`Thanks! Draining your accounts now.`);
    break;
  } else {
    console.log(`No dice! Let's try again.`)
  }
}

