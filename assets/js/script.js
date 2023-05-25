
// Big shoutout and and credit to pritishnagpal at www.geeksforgeeks.org for the code
//game code
let game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to
	let playGame = () => {
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
				

				const choiceNumber = Math.floor(Math.random()*5);
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
	let winner = (player,computer) => {
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
				result.textContent = 'Ohhh! Computer Chose Paper';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			
			
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Ohhh! Computer Chose Rock';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Ohhh! Computer Chose Scissors';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'lizard'){
			if(computer == 'rock'){
				result.textContent = 'Ohhh! Computer Chose Rock';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'spock'){
			if(computer == 'lizard'){
				result.textContent = 'Ohhh! Computer Chose Lizard';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'spock'){
				result.textContent = 'Ohhh! Computer Chose Spock';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'lizard'){
			if(computer == 'scissors'){
				result.textContent = 'Ohhh! Computer Chose Scissors';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'lizard'){
				result.textContent = 'Ohhh! Computer Chose Lizard';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'spock'){
			if(computer == 'paper'){
				result.textContent = 'Ohhh! Computer Chose Paper';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'rock'){
			if(computer == 'spock'){
				result.textContent = 'Ohhh! Computer Chose Spock';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Yeay! You Won!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	};

	// Game over function
	let gameOver = (playerOptions,movesLeft) => {

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