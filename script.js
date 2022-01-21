
//define the computer's move 
function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choices2 = choices[Math.floor(Math.random()*choices.length)];
    return choices2;
}

//define scoreline

let userScore = 0;
let computerScore = 0;
let tie = 0;

function playRound(){
    
    let playerSelection = prompt('Rock, Paper, Scissors! Enter your move:'); //ask for player input
    let computerSelection = computerPlay();

    
    //conditions
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        userScore = userScore + 1;
        console.log('You win! Rock beats Scissors!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        userScore = userScore + 1;
        console.log('You win! Paper beats Rock!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        userScore = userScore + 1;
        console.log('You win! Scissors beats Paper!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    } else if (playerSelection == computerSelection) {
        tie = tie + 1;
        console.log('It is a tie!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    } else {
        computerScore = computerScore +1; 
        console.log('You lose!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    }
}

//call this function after 5 games
function endGame() {
    if (userScore < computerScore) {
        console.log('Game Over! You lose!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    } else if (userScore > computerScore){
        console.log('Game Over! You win!');
        console.log(`Win: ${userScore}`);
        console.log(`Lose: ${computerScore}`);
        console.log(`Tie: ${tie}`);
    }
}

//use a for loop to play the game 5 times
function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
    } console.log(endGame());
}

game();
