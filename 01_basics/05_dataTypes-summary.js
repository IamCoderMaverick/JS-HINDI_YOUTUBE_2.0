// Primitive - can't allocate to memory

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; //undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 345653457364763343n


// Refrence (Non primitive) - can allocate refrence in Memory

// Array, Objects, Functions //data types always functions

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }


// const myFunction = function(){
//     console.log("hello World");
    
// }

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction); //function object


// console.log(typeof id);




// *******************************************************


//  Stack(Primitive) - Always give copy 
//  Heap(Non-Primitive) - original value reference



let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename
anotherName = "ChaiaurCode"

console.log(anotherName);
console.log(myYoutubename);


let userOne = {
    email: "user@googl.com",
    upi: "user@ybl"
}

console.log(userOne);

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);





