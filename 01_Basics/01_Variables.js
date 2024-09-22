// 3 declaring ways - const, let, var
let accountID = 'sdf'
const accountName = 'something'
var accountCity = 'Jaipur'
accountEmail = 'this@gmail.com' // Not preferred
let accountState; //Undefined
//var is not used anymore because of issue in block scope and functional scope
console.log(accountCity)
console.table([accountID, accountName, accountCity])