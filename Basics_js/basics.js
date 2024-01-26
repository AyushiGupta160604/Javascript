console.log("Ayushi")
const accountId = 123456
let accountEmail = "ayushi@gmail.com"
var accountPassword = "12266"
accountCity = "Surat"
let accountState;

// accountId = 2 // not allowed
accountEmail = "gupta@gmail.com"
accountPassword = "12390"
accountCity = "Mumbai"
/* 
prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountId,accountCity,accountState])