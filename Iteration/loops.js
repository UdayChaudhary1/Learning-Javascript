// for
const arr = [1, 2, 3, 4, 5]

for(let i = 0; i<=arr.length; i++){
  console.log(arr[i]) // 1 2 3 4 5 undefined
}

//while

// while(true){

// }

// do{

// }while(true)

// array specific loop
// for of

const arr1 = [1, 2, 3, 4, 5, 6, 7]
const greeting = "Hello"
for (const i of arr1) {
  console.log(i) // 1 2 3 4 5 
}
for (const greet of greeting) {
  console.log(greet)  // H e l l o
}

// map -  holds key-value pairs and remembers the original insertion order of the keys also the values will be unique
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));  // 1
console.log(map1) // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
for (const key of map1) {
  console.log(map1) // 3 times because size is 3
}
for (const [key, value] of map1) { // this will not work for object error = objectName is not iterable
  console.log(key, ':-', value)  //a :- 1
  // b :- 2
  // c :- 3
}

//for in (can be used for object)
const obj = {
  username: "uday",
  age: 22
}
for (const key in obj) {
  console.log(key) 
  console.log(`${key} is the key for ${obj[key]}`) 
  // username
  // username is the key for uday
  // age
  // age is the key for 22
}

for (const key in map1) { // trying to use forin on map but map is not itnerable(will not work) but also will not give an error
  console.log(key)
}

// foreach
const ar = [1, 2, 3, 4, 5]
ar.forEach(function (num) {   // expects a callback function, can also give another function as a parameter
  console.log(num)
});   

// or

ar.forEach((num, index, array) => {
  console.log(num, index, array)
  // 1 0 [ 1, 2, 3, 4, 5 ]
  // 2 1 [ 1, 2, 3, 4, 5 ]
  // 3 2 [ 1, 2, 3, 4, 5 ]
  // 4 3 [ 1, 2, 3, 4, 5 ]
  // 5 4 [ 1, 2, 3, 4, 5 ]
})

let objArr = [      // object of array, usually foreach is used, this format is very common
  {
    langauge: "Java",
    file: "java"
  },
  {
    langauge: "python",
    file: "py"
  },
  {
    langauge: "Javascript",
    file: "js"
  },
]

objArr.forEach((item) => {
  console.log(item)
 console.log(item.langauge)
//  { langauge: 'Java', file: 'java' }
  // Java
  // { langauge: 'python', file: 'py' }
  // python
  // { langauge: 'Javascript', file: 'js' }
  // Javascript
})