// Higher order functions
const coding = ["js", "ruby", "java", "python", "cpp"]

// call back function mai uska name ni hota hai, isme define krne ki jarurat ni hoti as yeh array k adner chl rha hai , toh use parameter bolo ya item bolo ya item wo run krdega
// coding.forEach(  function (item) {
//     console.log(item);
    
// } )

// arrow function with above
// coding.forEach( (item) => {
//     console.log(item);
    
// })


// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)




// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]


myCoding.forEach( (item) => {
    
    console.log(item.languageName);
        
}  )




