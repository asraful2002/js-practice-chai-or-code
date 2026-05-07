// let name = "asraful islam";
// let anotherName = name;
// anotherName = "jakariya"

// console.log(name);
// console.log(anotherName);

// let userOne = {
//   email:"user@google.com"
// }


// function addTowNumbers(number1,number2){
//   console.log(number1+number2);
  
// }

function addTowNumbers(number1,number2){
let result = number1+number2;
  console.log("asraful")
  return number1+number2
}
const result=addTowNumbers(3,5)
console.log(result)



function loginUserMessage(username = "jakariya"){
  if(!username){
    console.log("pls enter the user name")
    return
  }
  return `${username} just logged in`
}
console.log(loginUserMessage("asraful"))