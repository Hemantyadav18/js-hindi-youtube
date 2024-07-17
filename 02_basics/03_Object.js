//singleton
//object .creater

//object literals

const mySym=Symbol("key1")


const JsUser={
    name:"hemant",
    "full name":"hemant yadav",
    [mySym]:"mykey1",
    age:21,
    location:"Indore",
    email:"hemnaty4472@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
//console.log(JsUser.lastLoginDays[0]);

JsUser.email="hemantya.com";
//Object.freeze(JsUser)
JsUser.email="hemant1y.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}

JsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());