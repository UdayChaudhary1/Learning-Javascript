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

console.log("2" > 1) // true
console.log("02" > 1) // true
console.log(null < 0) // false
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// Comparisons(>, <, <=, >=) convert null to a number, trating it as 0. that is why null >= 0 is true. undefined always gives false. == is called equality check while === is strict check.
console.log("2" == 2) // true
console.log("2" === 2) // false

// Comparisons with null and undefined are avoided because they are confusing.

/*
two types of datatypes - primitive and non-primitive
1. primitive datatype - call by value - If you copy them then the original reference is not given but a copy and all the changes are made in the copy
a. string 
b. number
c. boolean
d. null
e. undefined
f. symbol 
g. bigInt

2. Non-primitive or reference type
a. array
b. object
c. function
*/

const num = 2340917350139754n // putting n at the end makes it bigint

/*
(typeof undefined) - undefined
(typeof null) - object
(typeof boolean) - boolean
(typeof number) - number
(typeof symbol) - symbol
(typeof function) - function
(typeof object(native and does not call implement)) - object
(typeof object(native or host and does not implement call)) - function
(typeof object(host and does not implement)) - implementation defined except may not be undefined, boolean, number or string
*/

/*
Two types of memory - stack(primitive) and heap(non-primitive)
for stack memory we get the copy of what is defined, while in heap we get a reference
*/

//Stack
let theName = "hello"
let anotherName = theName
anotherName = "changing value" //it will not change the value in theName

//heap

let userOne = {
    id: 123,
    firstName: "hello"
}
let userTwo = userOne
userTwo.firstName = "Bye" // This will change the value for userOne too.
