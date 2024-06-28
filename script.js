document.addEventListener("DOMContentLoaded", () => {
    const rulesButton = document.getElementById('rules-button');
    const closeButton = document.getElementById('close-button');
    const rulesModal = document.getElementById('rules-modal');
    const choices = document.querySelectorAll('.choice');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const playAgainButton = document.getElementById('play-again');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
  
    const choicesArray = ['rock', 'paper', 'scissors'];
  
    rulesButton.addEventListener('click', () => {
      rulesModal.style.display = 'flex';
    });
  
    closeButton.addEventListener('click', () => {
      rulesModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target == rulesModal) {
        rulesModal.style.display = 'none';
      }
    });
  
    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        showResult(winner, playerChoice, computerChoice);
        updateScore(winner);
      });
    });
  
    playAgainButton.addEventListener('click', () => {
      resultContainer.style.display = 'none';
      document.querySelector('.choices-container').style.display = 'flex';
    });
  
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choicesArray.length);
      return choicesArray[randomIndex];
    }
  
    function getWinner(player, computer) {
      if (player === computer) {
        return 'draw';
      }
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
      ) {
        return 'player';
      }
      return 'computer';
    }
  
    function showResult(winner, playerChoice, computerChoice) {
      resultContainer.style.display = 'flex';
      document.querySelector('.choices-container').style.display = 'none';
      if (winner === 'draw') {
        resultMessage.textContent = `It's a draw! You both picked ${playerChoice}.`;
      } else if (winner === 'player') {
        resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      }
    }
  
    function updateScore(winner) {
      if (winner === 'player') {
        score++;
      } else if (winner === 'computer') {
        score--;
      }
      scoreDisplay.textContent = score;
    }
  });
  