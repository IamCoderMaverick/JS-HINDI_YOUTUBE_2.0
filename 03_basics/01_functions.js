


function sayMyName (){
    console.log("h");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}


// sayMyName() //sayMyName is only reference to function when you include the () then it get executed.


// function mai jo daala jata hai use bolte hai parameters

// jab function ko call krte hai usme jo dalte hai use khete hai arguments
// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("hitesh") // as function exit kr gya after return
    return number1 + number2

}

const result = addTwoNumbers(3, 5) //jab function se return krege to use variable mai store kar sakte hai direct console log ni kr skte hai

// console.log("Results ", result);


function loginUserMessage (username = "Sam"){
    if(username === undefined){ //if(!username) same chiz h
        console.log("Please enter a username");
        return // uper condition statisfy ni hui to niche ka code ni chalega
    }
    
    return `${username} just logged in`
}

loginUserMessage("Hitesh") // function call hua but koi value ni aayegi as hamne print ka command diya hi ni 

// console.log(loginUserMessage("Hitesh")); //yaha hamne print command console.log kiya console.log se function reference di ,execute k liye () lagaye and usme argument paas kiya


// console.log(loginUserMessage()) //result will be undefinded agr. argument pass ni hoga


//rest operator "..." in functions Add to cart
// function calculateCartPrice (...num1){
//     return num1

// }

function calculateCartPrice (val1, val2, ...num1){
    return num1

}
// [ 500, 2000 ] isme val1 = 200, val2 = 400 baki sara ...num1


// console.log(calculateCartPrice(200,400,500, 2000))

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// for arrray
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}


// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));






