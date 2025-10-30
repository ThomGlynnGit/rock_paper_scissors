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
        computerScore += 1
    } else if (
        humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER" 
    ){
        console.log("SMASH you win x")
        humanScore += 1
    } else {
        console.log("Invalid input")
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

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
            computerScore += 1
        } else if (
            humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
            humanChoice === "PAPER" && computerChoice === "ROCK" ||
            humanChoice === "SCISSORS" && computerChoice === "PAPER" 
        ){
            console.log("SMASH you win x")
            humanScore += 1
        } else {
            console.log("Invalid input")
        }
    }

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore){
        console.log("Wooooow you won!")
    } else if (computerScore > humanScore) {
        console.log("Woooow you lost")
    } else {
        console.log("That's a tie dawg")
    }
    
}

playGame();





