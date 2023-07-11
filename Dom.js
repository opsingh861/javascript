// DOM (document object model)
// const ele = document.getElementById('heading') // this will return us the id or the node from the DOM tree
// console.log(ele)
// ele.innerHTML = "hello world" // this is for editing that node


// const ele = document.getElementsByClassName("list") // this is for class
// console.log(ele)


// const ele = document.querySelector("ul") // this will select the css part ( the first one and only one)
// console.log(ele)

// const ele = document.querySelectorAll("ul") // this will select all ul
// console.log(ele)

// const ele = document.querySelector("#heading")
// console.log(ele)
// ele.innerHTML = "Modified by javascript"
// // ele.style=`color:blue; // using tild we can write properties in new line
// // font-size:55px;
// // `

// ele.style = "color:dodgerblue; font-size:30px; font-family:Metropolis" // we can write also but not in new line, all should be in same line

// ele.classList.add("new-class")
// ele.classList.add("nsomething")
// ele.classList.remove("new-class") // we can only use these on single element or node
// console.log(ele.classList)

// const list = document.querySelector("ul")
// const todos = ["Eat food","Go for a run","Workout","Sleep"]
// todos.map(todo=>{
//     const toAdd = document.createElement("li")
//     text = document.createTextNode(todo)
//     toAdd.appendChild(text)
//     list.appendChild(toAdd)
//     // both are same in one we are adding a text node then adding to the parent, incase of innerHTML it directly adds the html tag
//     // toAdd.innerHTML = todo
//     // toAdd.innerHTML = `<h1>${todo}</h1>`
//     // console.log(toAdd)
//     console.log(text)
//     console.log(toAdd)
//     list.appendChild(toAdd)  
// })

// const timer = setInterval(() => { // this function will be invoked after every specified time
//     console.log("Hi")
// }, 1000); // this is specified time

// setTimeout(() => {
//     clearInterval(timer) // setInterval will be stopped
// }, 10000);


const timer = document.querySelector("#timer")
const secondHand = document.querySelector('div.second')
const minuteHand = document.querySelector('div.minute')

let time = 0;

const t = setInterval(() => {
    time++;
    minute = time / 60;
    secondHand.style = `transform:rotate(${time * 6}deg)`
    minuteHand.style = `transform:rotate(${minute * 6}deg)`
    timer.innerHTML = time;
}, 1000)


const list = document.querySelector('ul')

fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    response.json().then(todos => {
        todos.map(todo => {
            const toAdd = document.createElement("li")
            toAdd.innerHTML = todo.title
            list.appendChild(toAdd)
        })
    })
})



