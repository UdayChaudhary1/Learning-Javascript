const user = {
    username: "uday",
    age: 21,
  
    welcomeMessage: function() {
      console.log(`${this.username}, welcome to the website!`) // this is used to access all the elements in current context and here the current context is whatever is inside user object. if we will try to access it without using the this keyword it will throw an error username is not defined
      console.log(this) // {
      //   username: 'uday',
      //   age: 21,
      //   welcomeMessage: [Function: welcomeMessage]
      // }
      // the above is this or context
    }
    
  }
  
  user.welcomeMessage()
  user.username = 'sam'
  user.welcomeMessage() 
  console.log(this) //{} it is empty that means global context is empty because we are in node environment
  
  function one(){
    let username = "uday"
    console.log(this.username) // undefined because we cannot use this in function and if we use variable function then also same situation
    //console.log(this) // some large value
  }
  
  one()
  
  const two = () => {
    let username = "Uday"
    console.log(this.username) // still undefined
    console.log(this) // {}
  }
  
  () => {} // arrow function but you can also hold this in a variable
  
  //const three = (num1, num2) => (num1 + num2) // implicit return, if we use curly braces{return num1 + num2} then we have to write return keyword, but if there is parenthesis(num1+num2) then return keyword is not required we can also write without parenthesis const three = (num1, num2) => num1 + num2
  
  const three = (num1, num2) => ({username: "uday"}) // while returning an object we need to give it in parenthesis otherwise we will get undefined
  console.log(three())