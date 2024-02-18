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

console.log(getComputerChoice())