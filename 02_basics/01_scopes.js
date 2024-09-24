// let and const stay in there scope. but leaks out of scope and instead of doing var varName = 1, we can also write directly varName = 1 without writing the keyword var.
// if i have let or const, lets take an example, let varName = 1 which is in global scope and let varName = 3 which is in some local scope we will always get 1 as a value of varName if we will use it outside. 


function one(){
    var username = "hello"
    function two(){
        var city = "Mumbai"
    }
    //cannot access city here because of scoping
  }
  
  //cannot access username here becasue of scoping
  
  
  addOne(5) // i can use this type of function before declaring
  
  function addOne(val){
    return val + 1
  }
  
  // addTwo(5) // i cannot use this type of function before declaring, it will throw an error, error - Cannot access 'addTwo' before initialization
  
  const addTwo = function(val){ // variables are way too powerful can store anything
    return val + 2 
  }