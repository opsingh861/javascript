// function declaration
// function print(){
//     console.log("This is printed by function");
// }

// let print = () => {  // fat arrow function or unnamed function
//     console.log("This is printed by function")
// }

// print();


// with arguments

// function print(a = "Default value") { // if nothing is passed as argument it will take it as value
//     console.log(a)
// }

// print("hello")
// print()

// let number = prompt("Enter a number");

// function overloading is not supported in js

// anything which is undefined or null treated as false

// function print(a,b,c){
//     console.log(a);
//     if(b){
//         console.log(b)
//     }
//     if(c){
//         console.log(c)
//     }
// }

// print("absc")
// print("as",null)
// print("asdf",123,"asld")


// functions which returns

function addOne(a) {
    return a + 1;
}

addOne(4);
let result = addOne(5);
console.log(result);


// array operations
var ourArray = [1, 2, 3, 4, 5]
ourArray.push(6) // add six at the last

ourArray.unshift(0); // add at the beg

ourArray.pop() // remove from last
ourArray.shift() // remove from beg    

ourArray.splice(2, 1, 3) // it will replace the number, if the last place is remain blank then it will remove 

let newArray = ourArray.map((current) => {
    return current + 1;
});
console.log(ourArray);
console.log(newArray);

// incase of function let and var is exception they work as same

// hoisting = In JavaScript, hoisting allows you to use functions and variables before they're declared

// greet(); // this will throw error bcz function expression does not support hoisting
greet2(); // this is normal function and supports hoisting

const greet = function (Name = "John") {  // this is function expression
    console.log('Hi ' + Name);
}

function greet2(Name = "John") {
    console.log('Hi ' + Name);
}


const add = function (a = 0, b = 0) {
    return a + b;
}

const addArrow1 = (a = 0, b = 0) => {
    return a + b;
}

const addArrow2 = (a = 0, b = 0) => a + b; // this is same as above
console.log(addArrow1(1, 2));

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(item => item) // dont need to write the argument in seperate parenthesis if there is only one parameter
console.log(arr2)
const sum = arr.reduce((a, b) => a + b);
console.log(sum)


// const Car = {
//     make: "Mercedes Benz",
//     model: "W13",
//     move: function () {
//         console.log(this); // this will refer to this object
//     },

//     move2: () => {
//         console.log(this); // this will refer to global object which is Window, arrow function dont have this agility
//     }
// }

// Car.move();
// Car.move2();


const Car = (make,model) =>{ // using arrow function we cannot create factory function bcz this will refer to global object insted of the variable which are present inside the class
    this.make = make;
    this.model = model;
}

const car1 = new Car("Mercedes benz","W13")
console.log(car1)






