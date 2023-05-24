
// Big shoutout and and credit to pritishnagpal at www.geeksforgeeks.org for the code
//game code
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors'];
		
		// Start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// check who wins
				winner(this.innerText,computerChoice);
				
				// gameOver function after 5 moves
				if(moves == 5){
					gameOver(playerOptions,movesLeft);
				}
			});
		});
		
	};

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Draw';
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'You Lost';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'You Lost';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'You Lost';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	};

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		});

	
		chooseMove.innerText = 'RESULT!';
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Woho, You Won';
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Sorry, You Lost';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Draw';
			result.style.color = 'white';
		}
		reloadBtn.innerText = 'Again!';
		reloadBtn.style.display = 'flex';
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		});
	};


	// playGame function inside game
	playGame();
	
};

// Calling the game function

game();