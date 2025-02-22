const accountId = 144553
let accountEmail = "123@abc.com"
var accountPassword = "12345"
accountCity = "UP"

let accountState;

// accountId = 2 // Not Allowed




accountEmail = "AY@AY.com"
accountPassword = "212121"
accountCity = "Delhi"

/*
Prefer not o use var
beacuse of issue in block space and functional scope

*/

console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])