// import makeAPromise from './index.js'

// const data = {
//     Car:"BMW",
//     Color:"red",
//     year:"2018"
// }

// console.log(makeAPromise(data)) // this is fulfilling the Promise
// console.log(makeAPromise(data,'reject')) // this is reject the Promise


// const response = fetch('https://jsonplaceholer.typicode.com/todos')
// console.log(response) // this will return a Promise, but it will be pending as to fulfill the request it takes some time
// so we have to delay enough so that Promise is fulfilled

// setTimeout(() => {
//     console.log(response); 
// }, 3000);

// const response = getdata() // this will give some response in form of promise

// console.log(response) // again it will show pending as it will take time to fulfill the requests


// const doThis = (data) => {
//     console.log('do something with this data', data)
// }
// response.then(doThis);  // then keyword is used when a promise is completed then we specify what to do next
// // in this case we dont have to wait or guess in what time promise will be fulfilled it will automatically do the job we give to it


// // we can also chain the "then"  the next then will have the access or updated value of the previous then

// const firstTask = (data) => { // this function is updating the data we recieved
//     console.log(data)
//     return {
//         ...data,
//         drive: "9speed DSG",
//     };  
// };

// const secondTask = (data) => { // this function is showing the updated value
//     console.log(data)
// };


// response
//     .then(firstTask) // we are chaining then, in this case first to firstTask then second taks
//     .then(secondTask)


// const callback = function (resolve, reject) {
//     const car = 'BMW';
//     resolve(car)
// }

// const somePromise = new Promise(callback); // this is promise constructor which takes callback function

// we can simplify the above line in es6

// const somePromise = new Promise((resolve, reject) => {
//     const car = {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969
//     }
//     setTimeout(() => {
//         // resolve(car)  // returning car after 3000ms
//         reject("Something went wrong") // rejecting the Promise
//     }, 3000);

// })

// somePromise.then((data) => {
//     console.log(data)   // async line, it will run after the below line
// })
//     .catch((error)=>{
//         console.log(error)
//     }) // catching the error or rejection, when we are returning using reject() then promise will throw error

// console.log(somePromise)


const response = fetch('http://jsonplaceholder.typicode.com/users') //fetch returns promise

response.then((dataStream) => {  // showing the promise
    console.log(dataStream)
    const jsonData = dataStream.json() // again it is returning promise with data as array
    jsonData.then((data) => {
        console.log(data)
    })

})
// .catch((error)=>{ // catching the error
//     console.log("do whatever you want here")
//     console.log(error) 
// })

// we can also reduce it further to

response
    .then(dataStream => dataStream.json) // first fetch is returning us a promise then we (.json) function will conver it into json and return it as promise
    .then(jsonData => console.log(jsonData)) // previous promise is stored in jsondata and we consoling it
    .catch(error => console.log(error))


