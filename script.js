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

console.log(getComputerChoice())