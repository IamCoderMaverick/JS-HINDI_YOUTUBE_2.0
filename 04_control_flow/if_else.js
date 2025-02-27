// IF 

//condition = if true to code execute hoga ,false to execute ni hoga
// if (condition){

// }

const isUserLoggedIn = true
const temperature = 41

// if (temperature === 50){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
    
// }

// console.log("execute"); // iska above wale se koi connecntion ni hai


// < : less than
// > : greater than
// <= : less than and equal to
// => : greater than equal to 
// == : is 2==2  two equal to two 
// != : is 2!=3  two is not equal to three
// === : check is equal to as well check for data types as well
// if (2 === "2") {
//     console.log("executed");
// }
// !== for strict check , anti pattern is 2 != 3 = True 


// const score = 200

// if (score >100) {
//     let power = "Fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);



// shorthand notaion

// const balance = 1000

// if (balance > 500) console.log("test"); //implicit scope , ek hi line mai execute hota hai


// Nested IF ELSE
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && and condition will check both ,both will be true than only code will execute.
if (userLoggedIn && debitCard) {
    console.log("Allow To Buy Courses");
    
}

//  || : OR any one condition is true than code will execute
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged IN");
}















