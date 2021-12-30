const getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Error, please type: rock, paper, or scissors.';
    }
}

const getComputerChoice = function () {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else {
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'You lose!';
            } else {
                return 'You win!';
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'You lose!';
            } else {
                return 'You win!';
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'You lose!';
            } else {
                return 'You win!';
            }
        }
    }
}

const playGame = function () {
    const userChoice = getUserChoice('paper');
    console.log('You threw: ' + userChoice);
    const computerChoice = getComputerChoice();
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
console.log(playGame());




