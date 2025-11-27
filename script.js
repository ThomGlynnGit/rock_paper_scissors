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
    console.log(typeof(humanUpChoice) + " " + humanUpChoice)
    console.log(typeof(computerChoice) + " " + computerChoice)

    if (
        humanUpChoice === "ROCK" && computerChoice === "ROCK" ||
        humanUpChoice === "PAPER" && computerChoice === "PAPER" ||
        humanUpChoice === "SCISSORS" && computerChoice === "SCISSORS"
    ){
        console.log("The game is a tie")
    } else if (
        humanUpChoice === "ROCK" && computerChoice === "PAPER" ||
        humanUpChoice === "PAPER" && computerChoice === "SCISSORS" ||
        humanUpChoice === "SCISSORS" && computerChoice === "ROCK" 
    ){
        console.log("You have lost, so very badly")
        //computerScore += 1
    } else if (
        humanUpChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanUpChoice === "PAPER" && computerChoice === "ROCK" ||
        humanUpChoice === "SCISSORS" && computerChoice === "PAPER" 
    ){
        console.log("SMASH you win x")
        //humanScore += 1
    } else {
        console.log("Invalid input")
    }
}
/*
function playGame(){
    let humanScore = 0
    let computerScore = 0
 
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    console.log(`Human score: ${humanScore} | Computer score: ${computerScore}`)

    if (humanScore > computerScore){
        console.log("Wooooow you won!")
    } else if (computerScore > humanScore) {
        console.log("Woooow you lost")
    } else {
        console.log("That's a tie dawg")
    }
    
}*/

//playGame();

let rockButton = document.querySelector("#rock-button")
let paperButton = document.querySelector("#paper-button")
let scissorsButton = document.querySelector("#scissors-button")

rockButton.addEventListener("click",  (e) => {
    let computerSelection = getComputerChoice()
    let humanSelection = "rock"
    playRound(humanSelection, computerSelection)
})
    
paperButton.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice()
    playRound("paper", computerSelection)
})
    
scissorsButton.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice()
    playRound("scissors", computerSelection)
})
    



