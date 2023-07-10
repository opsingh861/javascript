// non premitive data types
// Array ( number of data that is of same data type)
// var fullName = ["Aditya", "Dhanraj", 2];
// console.log(fullName)
// fullName.push("hi")
// console.log(fullName)


// // map function
// fullName.map((name) => {
//     console.log(name)
// }); // like for each loop  


// objects (key value pair)

// var userData = {
//     name: "Aditya Dhanraj", // key cannot be duplicate
//     age: 20,
//     married: false,
//     friends: ["tannu","rishika","abhinav"],
//     "full name" : "Dev town" // this is when space is required
// }

// console.log(userData)
// console.log(userData.friends)
// console.log(userData.age)
// console.log(userData["full name"])


// combination of array and object
// array of objects

// var studentsData = [
//     {
//         name: "Aditya"
//     },
//     {
//         name: "Dhanraj"
//     },
//     {
//         name: "Raj"
//     }
// ];

// console.log(studentsData)
// studentsData.map((data) => console.log(data.name))

// var data = {
//     name : "Aditya",
//     class: "12th"
// };

// data.age = 12; // using this we can add new field in it
// data.name = "Aditya Dhanraj"; // we can update the field
// data.class = undefined; // can set it to undefined
// console.log(data)

// String manipulation

var name = "adiTya";
console.log(name.toUpperCase());
console.log(name.toLowerCase()); 
console.log(name.slice(0,3)); // from 0 to 3-1

var cote = "Javascript is amazing";
console.log(cote.replace("Javascript","JS")) // only replace the first word
console.log(cote)
console.log(cote.includes("is"));

var stringNumber = "23412"
var number = parseInt(stringNumber);
console.log(number+1);

var string = "12w3";
console.log(parseInt(string)); // upto where number is, it will parse

var String = "adsjsad";
console.log(parseInt(String)); // it will give Nan(Not a number) because it cannot be parsed

