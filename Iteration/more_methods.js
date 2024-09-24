let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newNums = num.filter((num) => num > 4) // it returns unlike foreach 
console.log(newNums)

const newNum = num.forEach((num) => {
  return num
}) // it returns undefined 
console.log(newNum) // undefined

const newNum2 = num.filter((num) => {num > 4}) // if using curly braces we have to use return keyword
console.log(newNum2) // [] 

const newNum3 = []
num.forEach((num) => {
  if(num > 4){
    newNum3.push(num)
  }
}) // do the same thing using foreach loop
console.log(newNum3) // [ 5, 6, 7, 8, 9 ]

newNums = num.map( (num) => num + 10) // no need for return keyword because ni curly braces
console.log(newNums) 
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19
// ]

//chaining
newNums = num.map( (num) => num*10).map( (num) => num+1) // i can also chain a different method after this like filter
console.log(newNums)
// [
//   11, 21, 31, 41, 51,
//   61, 71, 81, 91
// ]

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
); // accumulator first gets the intialValue, then from next iteration it stores the sum of accumulator and currentValue

console.log(sumWithInitial); // 10  sum of array