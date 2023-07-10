function log() {
    console.log("hi")
}
setTimeout(log, 3000) // but this is webapi which is unknown to js so it will run in task queue 
// remember it is taking its time of 3 sec but it will only run when all syncronous task from call stacks are completed then it will reflect as output in that period 3000ms second is running

for (let i = 0; i < 10000; i++) { // this will run first in call stack
    console.log(1);
}