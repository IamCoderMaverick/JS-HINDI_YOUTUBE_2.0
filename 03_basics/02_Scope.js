


// {} //scope for functions,if else, 

// var c = 300 // global scope
// var c = 30 // not use anymore as doesn't flow scope 

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER ", a);
    
// }


// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "hitesh"

    function  two () { // two chota hai to bade one se le skata h icecream
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // one bada hai chote two se icecream ni le skta 

    two()
    
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " gamil"
        // console.log(username + website);
    }
    // console.log(website); //kyu ki scope se bahar hai child scope k   
}

// console.log(username); // iska scope bhi yaha ni hai 



//  +++++++++++++++++ INTERSTING ++++++++++++++++++++++

//basic function
console.log(addone(5))
function addone (num) { 
    return num + 1

}




// function hai kbhi kabar expresiion boldiya jaata hai ,variable h wese yeh JS variable bahut powerful
addTwo(5)  //hoisting
const addTwo = function(num){
    return num + 2

}















