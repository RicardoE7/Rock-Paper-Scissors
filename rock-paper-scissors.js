console.log("Hello World! Let's Play Rock, Paper, Scissors.\nWe'll play five rounds and whoever has the most wins after five rounds wins the game! \nType game() into the console and press enter to start the game")
let wins = 0;
let losses = 0;
let draws = 0;
let computerSelection;
let playerSelection;
const resultDiv = document.querySelector('#result')
function logThis(e){
    console.log(e.target.id)
    playRound(e)
}

const selections = document.querySelectorAll('.selection')
const selection = document.querySelector('.selection')
selections.forEach(selection => selection.addEventListener('click', logThis))


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
const para = document.createElement('p')
const h3 = document.createElement('h3')
resultDiv.appendChild(h3)
resultDiv.appendChild(para)
function playRound(e){

    playerSelection = `${e.target.id}`
    computerSelection = getComputerChoice();
let comLower = computerSelection.toLowerCase()
let playerLower = playerSelection.toLowerCase()
console.log("Your choice: ", playerSelection)
console.log("Computer's choice: ",computerSelection)
let gameOutcome;
let choices;

if (comLower == playerLower)
{
    draws++
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `It's a draw!  Score: ${wins}: ${losses} Draws: ${draws}`
}
if (comLower == "rock" && playerLower == "scissors")
{
    losses++
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `You lose. Rock beats Scissors. Score: ${wins}: ${losses}`
}
if (comLower == "paper" && playerLower == "rock")
{
    losses++
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `You lose. Paper beats Rock. Score: ${wins}: ${losses}`
}
if (comLower == "scissors" && playerLower == "paper")
{
    losses++
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `You lose. Scissors beats Paper. Score: ${wins}: ${losses}`
}
if (comLower == "scissors" && playerLower == "rock")
{
    wins++
     choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome =` You Win!! Rock beats Scissors.  Score: ${wins}: ${losses}`
}
if (comLower == "rock" && playerLower == "paper")
{
    wins++
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `You Win!! Paper beats Rock. Score: ${wins}: ${losses}`
}
if (comLower == "paper" && playerLower == "scissors")
{
    wins++
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `You Win!! Scissors beats Paper. Score: ${wins}: ${losses}`
}
if (wins == 5)
{
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `Congrats! You beat the computer ${wins} to ${losses}. Game to 5 again? Make a selection`
    wins = 0
    losses = 0
    draws = 0
}
if(losses == 5)
{
    choices = `Your choice: ${playerSelection}
    Computers choice: ${computerSelection}`
    gameOutcome = `Nice try. The computer beat you ${losses} to ${wins}. Game to 5 again? Make a selection`
    wins = 0
    losses = 0
    draws = 0
}
h3.textContent = choices
para.textContent = gameOutcome
resultDiv.replaceChild(h3, h3)
resultDiv.replaceChild(para, para)

return gameOutcome
}

function game(e){
    wins = 0
    losses = 0
    let finalScore;
    for(let i = 0; i ; i++)
    {
        console.log(playRound(playerSelection, computerSelection, e))
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

