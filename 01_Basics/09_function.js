function say(){
    console.log("Hello")
  }
  
  say()
  
  function add(num1, num2){
    console.log(num1 + num2)
    
  }
  
  add() // NaN
  add(4, 5) // 9
  add(4, 'a') // 4a
  add(3, '4') // 34
  add(3, null) // 3
  const res = add(4, 5)
  console.log(res) // undefined because we didn't return answer to the result
  
  function userLogin(username){
    return `${username} just logged in`
  }
  
  console.log(userLogin()) // undefined just logged in
  
  function userLogin2(username){
    if(username === undefined){ //if(!username){}
      console.log("Enter a username")
      return
    }
    return `${username} just logged in`
  }
  console.log(userLogin2()) // Enter a username undefined

function calculateCartPrice(val1, val2, ...amount){
  return amount
}

console.log(calculateCartPrice(100, 200, 300, 400, 500)) // [ 300, 400, 500 ] returing just amount which is an array, 100 goes to val1, 200 goes to val2 and rest goes to amount

const user = {
  username: "uday",
  age: 21
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`) // by mistake if i gave the wrong key like ages(made a typo) it will give undefined, for this problem we need to check type safety
}
handleObject(user) // Username is uday and age is 21
handleObject({
  username: 'someone',
  age: 33
}) // Username is someone and age is 33