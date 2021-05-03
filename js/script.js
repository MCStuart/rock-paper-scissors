// randomly return rock, paper, or scissors
function computerPlay() {
  // rock = 1
  // paper = 2
  // scissors = 3
  let computerSelection = '';
  let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
  switch (computerChoice) {
    case 1:
      computerSelection = 'rock';
      break;
    case 2:
      computerSelection = 'paper';
      break;
    case 3:
      computerSelection = 'scissors'
      break;
    default:
      alert('the computer decided not to play for some reason')
  };
  return computerSelection;
}
// console.log(computerPlay())


// Asks player their game throw with a window prompt
function playerChoice() {
  let playerSelection = prompt('Rock, Paper, Scissors, Shoot! What do you throw? Please type \'Rock\', \'Paper\', or \'Scissors\'')
  return playerSelection;
}
// console.log(playerChoice())

// takes two params, player's and computers and determines winner
function playRound(playerSelection, computerSelection) {
  // make playerSelection param case-insensitive (rock, ROCK, roCK should all work)
  let playerStr = playerSelection.toLowerCase();

  let roundDeclaration = '';

  // returns string that declairs winner (e.x. "You lose! Paper beats rock", etc.)
  switch (playerStr) {
    case 'rock':
      if (computerSelection == 'rock') {
        roundDeclaration = "It's a tie! You both played Rock";
      }
      else if (computerSelection == 'paper') {
        roundDeclaration = "You lose! Paper beats Rock";
      }
      else if (computerSelection == 'scissors') {
        roundDeclaration = 'You won! Rock beats Scissors'
      }
      break;
    case 'paper':
      if (computerSelection == 'rock') {
        roundDeclaration = 'You won! Paper beats Rock';
      }
      else if (computerSelection == 'paper') {
        roundDeclaration = "It's a tie! You both played Paper";
      }
      else if (computerSelection == 'scissors') {
        roundDeclaration = 'You lose! Scissors beats Paper'
      }
      break;
    case 'scissors':
      if (computerSelection == 'rock') {
        roundDeclaration = "You lose! Rock beats Scissors";
      }
      else if (computerSelection == 'paper') {
        roundDeclaration = "You win! Scissors beats Paper";
      }
      else if (computerSelection == 'scissors') {
        roundDeclaration = "It's a tie! You both played Scissors"
      }
      break;
    default:
      alert('something went very wrong');
  }

  return roundDeclaration;
}


// use previous playRound() inside this function to play a 5 round game that keeps score and reports a winner and loser at the end
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let result = playRound(playerChoice(), computerPlay())

    if (result.includes('won') == true) {
      console.log(result)
      ++playerScore
    }
    else if (result.includes('lose') == true) {
      console.log(result)
      ++computerScore
    }
    else if (result.includes('won') != true && result.includes('lose') != true) {
      console.log(result)
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won ${playerScore} - ${computerScore}!
    Great job! Would you like to play another round?`)
  }
  else if (playerScore < computerScore) {
    console.log(`Oh no, the computer beat you ${computerScore} - ${playerScore}!
    I'm sure you'll win next round!`)
  }
  else if (playerScore = computerScore) {
    console.log(`What a match but it came out as a draw, ${playerScore} - ${computerScore}!
    One more game to see who the real winner is?`)
  }
}

game()
