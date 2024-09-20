// if we make object using constructor it is singleton
//object.create - constructor method of making object
//there are 2 ways to declare object using constructor and object literal
//Object literals
const p1 = {
    fullName: "Uday",
    age: 40,
    location: 'jaipur',
    isLoggedIn: false,
    "country": "India"
  }
  
  // 2 ways to access
  console.log(p1.fullName)
  console.log(p1["fullName"])
  console.log(p1.country) // cannot use string key to access using dot method
  
  console.log("------------")
  
  
  
  //using symbol as a key
  const mySym = Symbol("key1")
  
  const p2 = {
    email: "here@gmail.com",
    fullName: "Uday",
    [mySym]: "myKey",
    age: 40,
    location: 'jaipur',
    isLoggedIn: false,
    "country": "India"
  }
  
  console.log(typeof p2.mySym) // undefined and if no square bracket([mySym]) then string
  console.log(p2.mySym) // undefined
  console.log(p2[mySym]) // myKey
  
  console.log("--------------")
  p2.email = "nothere@gmail.com"
  // Object.freeze(p2) // this will restrict any change in the object
  // p2.email = "herehere@gmail.com" // this will be useless because of freeze
  console.log(p2)
  
  console.log("--------------")
  
  p2.greeting = function(){
    console.log(`Hello ${this.fullName}`)
  }
  console.log(p2.greeting) // [Function (anonymous)] function didn't execute we have only got the reference of the function
  console.log(p2.greeting()) // Hello Uday undefined
  
  
  console.log("--------------------------------------------")
  
  //using constructor
  const user = new Object() // singleton object
  console.log(user) // {}
  user.fullName = "Daniel"
  user.location = "LA"
  user.isLoggedIn = false
  
  // object in a object
  const obj1 = {
    n1: "here",
    obj2: {
      obj3: {
        theName: "name in obj3",
        lastName: "lastName in obj3"
      }
    }
  }
  
  console.log(obj1.obj2?.obj3.theName) // name in obj3, the ? is the optional chaining which protects from the scenario where obj2 does not exist
  
  const o1 = {1: 'a', 2: 'b'}
  const o2 = {3: 'c', 4: 'd'}
  const o3 = {o1, o2}
  console.log(o3) // { o1: { '1': 'a', '2': 'b' }, o2: { '3': 'c', '4': 'd' } }
  const o4 = Object.assign(o1, o2) // here o1 is the target while o2 is the source
  console.log(o4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
  const o5 = Object.assign({}, o1, o2) // {} works as a target and the rest(o1, o2) works as source
  console.log(o5) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
  const o6 = {...o1, ...o2} // spread operator is the most common way
  console.log(o6) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
  console.log(Object.keys(o6)) // [ '1', '2', '3', '4' ] we get an array of keys on o6
  console.log(Object.values(o6)) // [ 'a', 'b', 'c', 'd' ] we get an array of values on o6
  console.log(Object.entries(o6)) // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ] we make array of arrays of the key value pairs
  console.log(o6.hasOwnProperty('5')) // false, checks if there is 5 as a key
  
  console.log("-----------------------")
  
  const course = {
    courseName: "js",
    price: 999
  }
  
  //this is called destructuring
  const {courseName} = course // similar to course.courseName
  console.log(courseName) // js
  
  const {courseName: name} = course // changing it to name
  console.log(name) // js