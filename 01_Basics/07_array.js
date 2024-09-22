//In JavaScript, arrays aren't primitives but are instead Array objects
//JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
//JavaScript array-copy operations create shallow copies.
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
const array = [1, 2, 3 ,4]
const myArr = new Array(1, 2, 3, 4, 5, 6)
console.log(typeof myArr) // object
myArr.push(7)
myArr.pop()
myArr.unshift(9) // shifts all the array element and adds 9 at the start 
myArr.shift() // removes the first element
console.log(myArr.includes(4)) // true
console.log(myArr.indexOf(4)) // 3
const newArr = myArr.join()
console.log(newArr) // 1,2,3,4,5,6
console.log(typeof newArr) // string

console.log('------------------')
// slice and splice
const newArr2 = myArr.slice(1, 4)
console.log(newArr2)
console.log(myArr)
const newArr3 = myArr.splice(1, 4)
console.log(newArr3)
console.log(myArr)


// first difference is that splice includes the last index given in the range while slice don't do that
// second difference is splice plucks out that part from the original array which reduces the size of the array while in case of slice it remains as it is.

console.log("-----------------")
const merge1 = [1, 2, 3, 4, 5]
const merge2 = [5, 6, 7, 8, 9]
//merge1.push(merge2)
//console.log(merge1) // [ 1, 2, 3, 4, 5, [ 5, 6, 7, 8, 9 ] ] merge2 array becomes last element of the merge1
merge1.concat(merge2) // not holding anywhere
const merged = merge1.concat(merge2)
console.log(merged)  
// [
//   1, 2, 3, 4, 5,
//   5, 6, 7, 8, 9
// ]

const spreadMerge = [...merge1, ...merge2] // this is used mostly to concatenate
console.log(spreadMerge)

const strangeArr = [1, 2, 3, [4, 3, 1], [1, 2, 3, [4, 5, 6]]]
const normalArr = strangeArr.flat(Infinity)
console.log(normalArr)
console.log("---------------")

console.log(Array.isArray('Uday')) // false
console.log(Array.from('Uday')) // [ 'U', 'd', 'a', 'y' ]
console.log(Array.from({name: 'uday'})) // [] returns an empty array

let s1 = 1000
let s2 = 300
let s3 = 100
console.log(Array.of(s1, s2, s3)) // [ 1000, 300, 100 ]
