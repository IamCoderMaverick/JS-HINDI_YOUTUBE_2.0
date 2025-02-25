// singleton - jab constructor se banate hai to  singleton banta hai
//litreals se banta h to ni banta hai singleton



// object literals
// Object.create // contructor ,singleton

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name":  "hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "123@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);




JsUser.email = "xyz@123.com"
// Object.freeze(JsUser)
JsUser.email = "xyz@microsoft.com"


// console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






