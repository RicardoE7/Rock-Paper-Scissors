console.log("Hello World!")
let wins = 0;
let losses = 0;
let computerSelection;
let playerSelection;
function getComputerChoice(){
    let randomRoll = Math.random()
    
    if (randomRoll >= 0 && randomRoll <= .32)
    {
        computerChoice = "Rock"
    }
    if (randomRoll > .32 && randomRoll <= .65)
    {
        computerChoice = "Paper"
    }
    if (randomRoll > .65 && randomRoll <= 1)
    {
        computerChoice = "Scissors"
    }
    return computerChoice
}

function playRound(playerSelection, computerSelection){

    playerSelection = prompt("Rock, Paper, or Scissors?")
    computerSelection = getComputerChoice();
let comLower = computerSelection.toLowerCase()
let playerLower = playerSelection.toLowerCase()
console.log("Your choice: ", playerSelection)
console.log("Computer's choice: ",computerSelection)
let gameOutcome;

if (comLower == playerLower)
{
    gameOutcome = `It's a draw!  Score: ${wins}: ${losses}`
}
if (comLower == "rock" && playerLower == "scissors")
{
    losses++
    gameOutcome = `You lose. Rock beats Scissors. Score: ${wins}: ${losses}`
}
if (comLower == "paper" && playerLower == "rock")
{
    losses++
    gameOutcome = `You lose. Paper beats Rock. Score: ${wins}: ${losses}`
}
if (comLower == "scissors" && playerLower == "paper")
{
    losses++
    gameOutcome = `You lose. Scissors beats Paper. Score: ${wins}: ${losses}`
}
if (comLower == "scissors" && playerLower == "rock")
{
    wins++
    gameOutcome = `You Win!! Rock beats Scissors.  Score: ${wins}: ${losses}`
}
if (comLower == "rock" && playerLower == "paper")
{
    wins++
    gameOutcome = `You Win!! Paper beats Rock. Score: ${wins}: ${losses}`
}
if (comLower == "paper" && playerLower == "scissors")
{
    wins++
    gameOutcome = `You Win!! Scissors beats Paper. Score: ${wins}: ${losses}`
}
return gameOutcome
}

function game(){
    wins = 0
    losses = 0
    let finalScore;
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(playerSelection, computerSelection))
    }
    if (wins == losses)
    {
        finalScore = `You and the Computer tied for wins ${wins} to ${losses}`
    }
    if (wins > losses)
    {
        finalScore = `Congrats! You beat the computer ${wins} to ${losses}`
    }
    if (wins < losses)
    {
        finalScore = `Try again! The computer beat you ${losses} wins to ${wins}`
    }
    console.log(finalScore)
    return finalScore
}

