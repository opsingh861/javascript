const computerScore = document.getElementById("comp")
const myScore = document.getElementById("me")
const message = document.getElementById("message")
let uS = 0;
let cS = 0;

const choice = {
    0: "rock",
    1: "paper",
    2: "Scissor"
}

const computerChoice = () => {
    const res = Math.floor(Math.random() * 3)
    return res
}

const tie = () => {
    message.innerHTML = "It's a tie"
}

const computerWins = (mess) => {
    cS++;
    computerScore.innerHTML = cS;
    message.innerHTML = mess
}

const userWins = (mess) => {
    uS++;
    myScore.innerHTML = uS;
    message.innerHTML = mess
}

const game = (response) => {
    console.log(response)

    if (response == 0) {
        if (computerChoice() == 0) {
            tie();
        }
        else if (computerChoice() == 1) {
            computerWins("Paper covers rock. Computer wins");
        }
        else {
            userWins("Rock breaks scissor. User wins");
        }


    }
    if (response == 1) {
        if (computerChoice() == 0) {
            userWins("Paper covers rock. User wins");
        }
        else if (computerChoice() == 1) {
            tie();
        }
        else {
            computerWins("Scissor cuts paper. Computer wins");
        }

    }
    if (response == 2) {
        if (computerChoice() == 0) {
            computerWins("Rock breaks scissor. Computer wins");
        }
        else if (computerChoice() == 1) {
            userWins("Scissor cuts paper. User wins");
        }
        else {
            tie();
        }


    }
}



