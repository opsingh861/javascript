const doSomething = async () => { // using async keyword we are making it async function
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // await will  wait for the promise to complete
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log(error)
    }
 // we are simplifying it from then to async and await 
}

doSomething();
console.log(3);
