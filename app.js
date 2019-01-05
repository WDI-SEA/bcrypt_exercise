const bcrypt = require('bcrypt');
const readlineSync = require('readline-sync');
const saltRounds = 10;

const userName = readlineSync.question(`Username: `);
console.log(`Hi, ${userName}!`);
const password = readlineSync.question(`Password: `, {
  hideEchoBack: true,
});
const passwordVerify = readlineSync.question(`Password Again: `, {
  hideEchoBack: true,
});

const hashedPassword = bcrypt.hashSync(password, saltRounds);

bcrypt.compareSync(passwordVerify, hashedPassword) ? console.log('Success!') : console.log('Denied!');
