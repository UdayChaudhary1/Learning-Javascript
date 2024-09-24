// Immediately Invoked Function Expressions (IIFE)
// example usage - we have a file with database connection and as soon as our file start we want our database connection to start
// we also do not want to pollute our function because of global scope

(function one(){  // this is called a named iife because of the name one
    console.log("DB CONNECTED")
  })();  // DB CONNECTED , this iife has invoked but it doesn't know where to stop the context and for this we need to end it using a semicolon, without semicolon if we try to run another iife it won't work but other things will work as it is
  
  ((username) => { // simple iife
    console.log(`DB CONNECTED 2 ${username}`)
  })('username'); // we can pass parameters like this
  
  