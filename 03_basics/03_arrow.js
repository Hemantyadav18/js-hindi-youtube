const user={
    username:"hemant",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
       // console.log(this);
    }
}

//  user.welcomeMessage();
//  user.username="sam"
//  user.welcomeMessage();
//console.log(this);


// function chai(){
//     console.log(this);
// }

// chai()

// const chai=function(){
//     let username="hemant"
//     console.log(this.username);
// }

const chai=()=>{
    let username="hemant"
    console.log(this.username);
}

//chai();

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }


// const addtwo=(num1,num2)=> num1+num2

//const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({username:"hemant"})
console.log(addtwo(3,4));

// const myArray=[2,5,3,7,8]
// myArray.forEach()