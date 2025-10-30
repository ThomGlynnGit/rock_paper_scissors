function getComputerChoice(){
    let compNum = Math.random()
    compNum *= 3

    let compChoice = (
        compNum >= 0 && compNum < 1 ? "ROCK" :
        compNum >= 1 && compNum < 2 ? "PAPER" :
        compNum >= 2 && compNum <= 3 ? "SCISSORS" :
        null
    );

    return compChoice
}

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors")
    let humanUpChoice = humanChoice.toUpperCase()

    return humanUpChoice
}   

let humanScore = 0
let computerScore = 0

console.log(getHumanChoice())
console.log(getComputerChoice())