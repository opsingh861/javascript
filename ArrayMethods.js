// const arr = ["a", "b"]
// const arr2 = arr // this is not copying the array but passing the reference so whatever operation we will do on arr it will reflect on arr2
// // arr.pop();
// console.log(arr2)



// var num = 1;
// num++; // this we can do 

// const num1 = 1;
// num++; // this we cannot do as incase of premitive datatypes it stores value but in case of objects and array it takes the reference

// const arr3 = arr.map(function(e){
//     return e
// });
// arr.pop();
// console.log(arr3);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = [];

// arr.forEach(function (e) {  // this we can do using filter
//     if (e % 2 == 0) {
//         newArr.push(e);
//     }
// });

const newArr = arr.filter(function (item) { // filter will add that values where it returns true and ignore if it return false
    return item % 2 == 0;
})

console.log(newArr);

const ele = arr.find(function (item) { // find will find the value and return
    return item == 10
});
console.log(ele)


const sum = arr.reduce(function (a, b) { // it adds the number and whatever it get from the earlier iteration adds to next element
    console.log(a, b);
    return a + b;
});



// destructuring

var array = ["a", "b", "c"];
// var var1 = array[0];
// var var2 = array[1];
// var var3 = array[2];


// but this we can do as 

var [var1, var2, var3] = array;
console.log(var1)
console.log(var2)
console.log(var3)

// just as same we can do for objects


const Car = {
    brand: "Tata",
    model: "Nano",
    year: 2010,
    engine:{
        capacity:"5.8L",
        type:"V8",
        fuel:"(Petrol)"
    }
}

// const newObj = {
//     brand: Car.brand,
//     model: Car.model,
//     year: Car.year
// } 

// above can be done as

const {brand, model, year} = Car  // variable name should be same key name, sequence does not matter incase of object
// const {brand:strand,year,model} = Car // we can also change the value, now stand will point to strand
// console.log(strand)
console.log(brand,model,year)


console.log({
    brand:brand,
    year:year,
    model:model
})

console.log({
    brand,
    year,
    model
})

// above both are same


const {engine:{capacity}} = Car
console.log(capacity)


// (...) this is spread operator, it copies the element

const arr1 = [1,2,3];
const arr2 = [4,5]
const array1 = [...arr1]
console.log(array1)

console.log(arr1)
console.log(...arr1) // just showing the element

console.log([...arr,...arr2])


 // we can do the same thing for objects


 const car ={
    brand: "mercedes"
 }

 const engine ={
    type:"V8"
 }
 console.log({...car,...engine})

 // template string

 const Name = "John"
 const age = 21

 console.log(Name+" is "+age+" year old")
// we can write it as
console.log(`${Name} is ${age} year old`);





