function getComputerChoice(){
    let play = Math.floor(Math.random() * 3-1 + 1 )+1
    if (play == 1){
        return "Rock"
    }
    else if (play == 2){
        return "Paper"
    }

    else{
        return "Scissor"
    }
}

function playRound(computerChoice, playerChoice){
    let playerChoice = playerChoice.lower
    let computerChoice = computerChoice.lower

    if(playerChoice == "rock" && computerChoice == "paper"){
        return "You Lose, Paper beats Rock"
    }
    else if(playerChoice == "scissor" && computerChoice == "rock"){
        return "You Lose, Rock Beat scissor"
    }
    else if(playerChoice == "paper" && computerChoice == "scissor"){
        return "You Lose, Scissors Beats Paper"
    }
    else{
        return "You Win"
    }
}

function playGame(){
    let playerWins = 0
    let computerWins = 0
    for(let i = 0; i <= 5; i ++){
        let round = playRound(getComputerChoice(),prompt())
        console.log(round)
        if(round == "You Lose"){
            computerWins ++
        }
        else{
            playerWins ++
        }
    }
    if(playerWins > computerWins){
        console.log("Player Wins")
    }
    else{
        console.log("Computer Wins")
    }
}

playGame()

