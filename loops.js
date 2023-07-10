// for loops

for (let i = 0; i < 5; i++) // don't use var to declare variable as it has global scope
{
    console.log(i)
}

let person = ["ram", "shyam", "geeta"]
for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}

// while loops

let i = 0;
while (i < 5) { // declare and assign the variable first
    console.log(i)
    i++;
}

let j = 0;
do {
    console.log(j)
    j++;
} while (j < 5)


// difference between let and var

var x; // global variable
let q; // limited block scope

// break(exit the loop)
// continue(to skip the iteration)


// ourArray.forEach((current, index) => {
//     console.log(current)
//     ourArray.splice(index, 1, current + 1);
// });
// console.log(ourArray)


