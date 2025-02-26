const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`) // this means same child parent se parameter le rha hai or current context ko refer krta hai
        console.log(this);   
    }
    
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); // result will be {} as koi context ni hai as ham node mai hai , global context mai kuch ni hai isliye aaya , yhi browser mai hota toh use window object hota hai as woh browser mai hai.



// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
    
// }
// chai()



// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
    
// }

//arrow function
const chai = () => { 
    let username = "Hitesh"
    console.log(this);
    
}

// chai()


// this is explicit 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// this is implicit 
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// in currly braces {} then return is necessary

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3,4));


// const myArray = [2,3,4,5,7,8]

// myArray.forEach()