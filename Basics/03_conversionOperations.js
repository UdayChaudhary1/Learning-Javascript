let value = '33a'
console.log(typeof value) // string
let change = Number(value)
console.log(typeof change) // number
console.log(change) // NaN

let value2 = null
console.log(typeof value2) // object
let change2 = Number(value2)
console.log(typeof change2) // number
console.log(change2) // 0

let value3 = undefined
console.log(typeof value3) // undefined
let change3 = Number(value3)
console.log(typeof change3) // number
console.log(change3) // NaN

/*
For Boolean
0 is false and 1 is true
"" is false and "something" is true
*/

let str1 = "Hello"
let str2 = " You!"
console.log(str1 + str2) // Hello You!

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log(true) // true
console.log(+true) // 1 it runs but Bad code
//console.log(true+) // error
console.log(+"") // 0 it runs but bad code

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"
// postfix increments and returns the value before incrementing
// prefix increments and returns the value after incrementing