const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// betterthan foreach, its return automatically the value
// const newNums =  myNumbers.map( (num) => num +10 )
// console.log(newNums);


// const newNums =  myNumbers.map( (num) => {return num +10} )

// Chaining

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map((num) => num + 1 )        // yaha pr jo num hoga woh phele wale se new array bani hai wo wala new num hoga
                .filter( (num) => num >= 40 ) // yaha bhi uper ki value jo aayegi usme se value pass on hogi

console.log(newNums);








