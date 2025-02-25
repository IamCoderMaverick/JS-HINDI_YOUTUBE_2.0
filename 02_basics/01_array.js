// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]


const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //last value in array be removed without arguments


// myArr.unshift(9) // include value in first position
// myArr.shift() // remove fisrt position same like pop

// console.log(myArr.includes(9)); //help in finding a value is tehre or not
// console.log(myArr.indexOf(3)); 


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);




