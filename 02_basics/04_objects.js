// Constructor


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fulname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "Choudhary"
        }
    }


}

// console.log(regularUser.fulname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // keep {} in this as to get these in {}


const obj3 = {...obj1, ...obj2, ...obj4} // spread 

// console.log(obj3);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedn')); //to check if it has value or not




const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}



// course.courseInstructor

const {courseInstructor: instructor} = course //de-structer

// console.log(courseInstructor);
console.log(instructor);


//************************** API ****************** */




// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "free",

// }



[
    {},
    {},
    {},
]





