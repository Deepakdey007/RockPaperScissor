/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = {computerScore : 0, playerScore : 0}

const deal = {Deal : 0};

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = ['Rock','Paper','Scissor']
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  
  // All situations where human draws, set `score` to 0
  
  if(playerChoice == computerChoice) {
    score = 0;
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  
  else if(playerChoice === 'Rock' && computerChoice === 'Scissor'){
    score = 1;
  }
  else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
    score = 1;
  }
  else if(playerChoice === 'Scissor' && computerChoice === 'Paper'){
    score = 1;
  }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if(score == -1) {
    resultDiv.innerText = 'You Lose!'
  }
  else if(score == 0) {
    resultDiv.innerText = "It's a Tie!"
  }
  else {
    resultDiv.innerText = "You Won!"
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score : ${totalScore['playerScore']}
  Computer Score : ${totalScore['computerScore']}
  
  `;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice}); 
  const computerChoice = getComputerChoice();
  console.log({computerChoice});
  const score = getResult(playerChoice, computerChoice);
  console.log({score})
  if(score == 1){
    totalScore['playerScore'] += score;
    deal['Deal'] += 1;
  }
  else if(score == -1) {
    totalScore['computerScore'] += score;
    deal['Deal'] += 1;
  }

  if(deal['Deal'] >= 3){

    // argument is for best play

    play_best(3); // for win (2/3) , (3/5), (5/9);
  }
  
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice);

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton');
  console.log(rpsButtons);

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value); 
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore);
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const dealDiv = document.getElementById('deal');

  resultDiv.innerText = '';
  handsDiv.innerText = '';
  playerScoreDiv.innerText = '';
  dealDiv.innerText = '';

}

function play_best(n) {
  let player_wins = totalScore['playerChoice'];
  let computer_wins = totalScore['computerChoice'];
  wins_necessary = Math.ceil(n/2);
  console.log(wins_necessary);
  while(player_wins <  wins_necessary && computer_wins < wins_necessary) {
      result;
      if(result == 0) {
          // `It is a tie. You and the compute both chose`;
      }
      else if(result == 1) {
          player_wins += 1;
          // `You Won!`
      }
      else {
          computer_wins += 1;
          // `You Lost`
      }
  }
  const dealDiv = document.getElementById('deal');

  if(player_wins > computer_wins) {
      dealDiv.innerText = `You have won the best of games!`
  }
  else {
      dealDiv.innerText = `The computer Won the best of games. Better Luck Next Time `
  }
}

playGame()