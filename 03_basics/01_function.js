function sayMyName(){
    console.log("H");
    console.log("e");
   console.log("m");
   console.log("a");
   console.log("n");
   console.log("t");
}

//sayMyName()

// function addTwoNumber(number1,number2){
//   console.log(number1+number2);

//  }


 function addTwoNumber(number1,number2){
//    let result=number1+number2
//    return result

  return number1+number2
  
   }
  
const result=addTwoNumber(3,4)
//console.log("result:",result);


function loginUserMessage(username="sam"){
    if(username === undefined){
        // if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hemant"));

console.log(loginUserMessage());