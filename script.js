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

function playRound(humanChoice, computerChoice){
    let humanUpChoice = humanChoice.toUpperCase()
    
    if (
        humanUpChoice === "ROCK" && computerChoice === "ROCK" ||
        humanUpChoice === "PAPER" && computerChoice === "PAPER" ||
        humanUpChoice === "SCISSORS" && computerChoice === "SCISSORS"
    ){
        console.log("The game is a tie")
    } else if (
        humanChoice === "ROCK" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
        humanChoice === "SCISSORS" && computerChoice === "ROCK" 
    ){
        console.log("You have lost, so very badly")
    } else if (
        humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER" 
    ){
        console.log("SMASH you win x")
    } else {
        console.log("Invalid input")
    }
}

let humanScore = 0
let computerScore = 0


console.log(getHumanChoice())
console.log(getComputerChoice())