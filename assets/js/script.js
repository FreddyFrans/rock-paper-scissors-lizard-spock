
// Big shoutout and and credit to pritishnagpal at www.geeksforgeeks.org 
//Game
function game() {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function 
	function playGame() {
		let rockBtn = document.querySelector('.rock');
		let paperBtn = document.querySelector('.paper');
		let scissorsBtn = document.querySelector('.scissors');
		let lizardBtn = document.querySelector('.lizard');
		let spockBtn = document.querySelector('.spock');
		let playerOptions = [rockBtn,paperBtn,scissorsBtn,lizardBtn,spockBtn];
		let computerOptions = ['rock','paper','scissors','lizard','spock'];
		
		// Start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				let movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				let choiceNumber = Math.floor(Math.random()*5);
				let computerChoice = computerOptions[choiceNumber];

				// check who wins
			 winner(this.innerText,computerChoice)
				
				// gameOver after 5 moves
				if(moves == 5){
					gameOver(playerOptions,movesLeft);
				}
			})
		});
		
	}

	// Function to decide winner
	//Credit to Frank Arellano at CI
	function winner(player,computer) {
		let result = document.querySelector('.result');
		let playerScoreBoard = document.querySelector('.p-count');
		let computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		
		
		if(player === computer){
			result.textContent = 'Draw';
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Bazinga Punk! I chose Paper!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}
				else if(computer == 'spock') {
					result.textContent = 'Bazinga Punk! I Chose Spock!';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
				}	
			
			else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Bazinga Punk! I Chose Rock!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}
				else if(computer == 'spock') {
					result.textContent = 'Bazinga Punk! I Chose Spock!';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
				}
			else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Bazinga Punk! I Chose Scissors!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}
			else if(computer == 'lizard') {
					result.textContent = 'Bazinga Punk! I Chose Lizard!';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
			
				}
			else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'lizard'){
			if(computer == 'rock'){
				result.textContent = 'Bazinga Punk! I Chose Rock!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}
			else if(computer == 'scissors') {
					result.textContent = 'Bazinga Punk! I Chose Scissors!';
					computerScore++;
					computerScoreBoard.textContent = computerScore;
				}
			else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'spock'){
			if(computer == 'lizard'){
				result.textContent = 'Bazinga Punk! I Chose Lizard!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}
			else if(computer == 'paper') {
				result.textContent = 'Bazinga Punk! I Chose Paper!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}
			else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		
	};

	// Game over function
	function gameOver(playerOptions,movesLeft) {

		let chooseMove = document.querySelector('.move');
		let result = document.querySelector('.result');
		let reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		});

	
		chooseMove.innerText = 'RESULT!';
		movesLeft.style.display = 'inherit';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Woho, You Are The Champion!';
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Sorry, Better Luck Next Time';
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


	// Function inside game
	playGame();
	
};

// Calling the game 

game();