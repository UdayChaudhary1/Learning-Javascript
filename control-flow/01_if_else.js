// var has global scope
let condition = true
if(condition){

}

if(2 == "2"){
  // will run
}

if(2 === "2"){ // strict checking
  // will not run
}else{
  console.log("Here")
}

if(condition) console.log(condition),
console.log("second statement"); //way to write multple lines with out curly braces but it is unreadable code

if(condition){
  //
}else if(condition){
  //
}

