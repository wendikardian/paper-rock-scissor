let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){
    const choice = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    const randomChoice = choice[randomNumber];
    return randomChoice;
}

function translate(word){
    if(word == "r"){
        return "rock";
    }else if(word == "p"){
        return "paper";
    }else{
        return "scissor";
    }
}

function win(userChoice, computerChoice){
    userScore += 1;
    userScore_span.innerText = userScore;
    result_div.innerHTML = `${translate(userChoice)}  win over  ${translate(computerChoice)}`;
    result_div.style.color = "green"
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=>  document.getElementById(userChoice).classList.remove('green-glow'), 700)
    

}

function lose(userChoice, computerChoice){
    computerScore += 1;
    computerScore_span.innerText = computerScore;
    result_div.innerText = `${translate(userChoice)} lose over ${translate(computerChoice)}`;
    result_div.style.color = "red"
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 700)
}

function draw(userChoice, computerChoice){
    result_div.innerText = "it's a draw";
    result_div.style.color = "white";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() =>document.getElementById(userChoice).classList.remove('grey-glow'), 700)

}

function game(userChoice){
    computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    
    rock_div.addEventListener("click", () => game("r"))
    paper_div.addEventListener("click", () => game("p"))
    scissor_div.addEventListener("click", ()=>game("s"))

}

main();