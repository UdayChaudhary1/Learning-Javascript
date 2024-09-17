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