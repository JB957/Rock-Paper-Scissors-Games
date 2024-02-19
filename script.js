const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorbtn = document.querySelector('#scissor')
const resultstxt = document.querySelector('#div')
const score = document.querySelector('#score')
let pWinCount = 0
let compWinCount = 0

rockbtn.addEventListener('click', () => { 
    let result = playRound(getComputerChoice(),"rock")
    resultstxt.textContent = result
    score.textContent = "Players Score " + pWinCount + " ComputerScore " + compWinCount
    CheckScore()
})
paperbtn.addEventListener('click', () => { 
    let result = playRound(getComputerChoice(),"paper")
    resultstxt.textContent = result
    score.textContent = "Players Score " + pWinCount + " ComputerScore " + compWinCount
    CheckScore()
})
scissorbtn.addEventListener('click', () => { 
    let result = playRound(getComputerChoice(),"scissor")
    resultstxt.textContent = result
    score.textContent = "Players Score " + pWinCount + " ComputerScore " + compWinCount
    CheckScore()
})

function CheckScore(){
    if(pWinCount == 5){
        resultstxt.textContent = "Player Won OverAll" 
        pWinCount = 0;
        compWinCount = 0;
        score.textContent = "Players Score " + pWinCount + " ComputerScore " + compWinCount;
    }
    if(compWinCount == 5){
        resultstxt.textContent = "Computer Wins Overall"
        pWinCount = 0;
        compWinCount = 0;
        score.textContent = "Players Score " + pWinCount + " ComputerScore " + compWinCount;
    }
}


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
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()



    if(playerChoice == "rock" && computerChoice == "paper"){
        compWinCount += 1
        return "You Lose, Paper beats Rock"
    }
    else if(playerChoice == "scissor" && computerChoice == "rock"){
        compWinCount += 1
        return "You Lose, Rock Beat scissor"
    }
    else if(playerChoice == "paper" && computerChoice == "scissor"){
        compWinCount += 1
        return "You Lose, Scissors Beats Paper"
    }
    else{
        pWinCount += 1
        return "You Win"
    }
}

// function playGame(){
//     let playerWins = 0
//     let computerWins = 0
//     for(let i = 0; i < 5; i ++){
//         let round = playRound(getComputerChoice(), prompt())
        // if(round.includes("You Lose")){
        //     computerWins ++
        // }
        // else{
        //     playerWins ++
        // }
//     }
//     if(playerWins > computerWins){
//         console.log("Player Wins")
//     }
//     else{
//         console.log("Computer Wins")
//     }
// }

playGame()

