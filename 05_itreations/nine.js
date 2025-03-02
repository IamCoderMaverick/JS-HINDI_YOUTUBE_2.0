// REDUCE METHOD 
// isme jab shopping cart mai user items add krta hai to hame uska total price dikhana hota hai tb sabse jada use hota hai reduce method 

const myNums = [1,2,3]


// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
// with arrow function
const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);







const shoppinCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 599
    },
    {
        itemName: "mobile dev course",
        price : 5999
    },
    {
        itemName: "data science course",
        price : 12999
    },
]


const priceToPay = shoppinCart.reduce((acc, item)=> acc + item.price, 0)


console.log(priceToPay);
