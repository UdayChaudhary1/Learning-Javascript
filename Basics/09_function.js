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