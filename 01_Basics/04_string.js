const firstName = "hello"
const age = 23

console.log(firstName + age + "value") //hello23value outdated way
console.log(`My name is ${firstName} and age is ${age}`) // String interpolation, My name is hello and age is 23

console.log(firstName[0]) // can use index
console.log(firstName.__proto__) //{}
console.log(firstName.length) // 5
console.log(firstName.toUpperCase()) // HELLO original value is not changed
console.log(firstName.toUpperCase()) // [Function: toUpperCase]
console.log(firstName.charAt(2)) // l
console.log(firstName.indexOf('l')) // 2
console.log(firstName.substring(0,3)) // hel if given negative value instead of 0 it will autmatically detect as 0
console.log(firstName.slice(-8,3))

const newString = "     here.   "
console.log(newString.trim()) // remove whitespaces
const url = "https://google.com"
console.log(url.replace('com', 'in'))
console.log(url.includes('com')) // true

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
