// Immediately Invoked Function Expressions

(function chai (){
    console.log(`DB CONNECTED`);   
})(); //for ending the first functions in IIFE


// () first is for function second ()if for executing function

// due server side population IIFE is required


// ( () => {
//     console.log(`DB CONNECTED`);
    
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`HITESH`)
