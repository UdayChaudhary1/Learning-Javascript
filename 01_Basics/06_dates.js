let myDate = new Date()
console.log(myDate) // 2024-09-18T14:30:12.268Z
console.log(myDate.toString()) // Wed Sep 18 2024 14:30:42 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()) // Wed Sep 18 2024
console.log(myDate.toLocaleString()) // 9/18/2024, 2:36:40 PM
console.log(typeof myDate) // object
let createDate = new Date(2023, 0, 23)
console.log(createDate) // 2023-01-23T00:00:00.000Z
console.log(createDate.toDateString()) // Mon Jan 23 2023