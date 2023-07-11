const button = document.querySelector("button")

const handleClick = (e) => {
    // console.log(e.target) // it will return the button or the element
    // alert("You clicked me")
    console.log("Single Click");
}

const handleDoubleClick = (e) => {
    console.log("Double clicked")
}

button.addEventListener('click', handleClick) // here we dont have to call the function just give the name on click it will be automatically called by eventlistner
button.addEventListener("dblclick", handleDoubleClick) // dbclick is for double click


const handleKeydown = (e) => {
    console.log(e)
    console.log(e.code) // this will give the code which button from the keyboard is clicked
    console.log(e.key) // exact value
    if (e.key == "Enter") alert("You pressed the enter key")
}

document.addEventListener('keydown', handleKeydown) // keydown is for keyboard events


const handleMove = (e) => {
    const dot = document.createElement("div")
    console.log(e.clientX, e.clientY) // to get the x and y coordinates+
    dot.style = `
    position:absolute;
    width:2px;
    height:2px;
    background-color:dodgerblue;
    top:${e.clientY}px;
    left:${e.clientX}px;
    `
    document.body.appendChild(dot)
}

document.addEventListener('mousemove', handleMove)