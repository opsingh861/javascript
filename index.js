const makeAPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: "BMW",
            color: "red",
            year: 2018
        })
    }, 700);
})

makeAPromise.then((result) => {
    console.log(result)
}).catch((err) => {

})
