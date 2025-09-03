const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScoreElem = document.getElementById('user-score');
const compScoreElem = document.getElementById('comp-score');

let userScore = 0;
let compScore = 0;

const options = ['rock', 'paper', 'scissors'];

// Generate computer's choice
function getCompChoice() {
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Determine winner
function getWinner(user, comp) {
    if (user === comp) return 'draw';
    if (
        (user === 'rock' && comp === 'scissors') ||
        (user === 'scissors' && comp === 'paper') ||
        (user === 'paper' && comp === 'rock')
    ) {
        return 'win';
    }
    return 'lose';
}

// Play a round
function playGame(userChoice) {
    const compChoice = getCompChoice();
    const result = getWinner(userChoice, compChoice);

    if (result === 'win') {
        userScore++;
        msg.textContent = `You win! ${capitalize(userChoice)} beats ${capitalize(compChoice)}`;
    } else if (result === 'lose') {
        compScore++;
        msg.textContent = `You lose! ${capitalize(compChoice)} beats ${capitalize(userChoice)}`;
    } else {
        msg.textContent = "It's a draw!";
    }
    userScoreElem.textContent = userScore;
    compScoreElem.textContent = compScore;
}

// Capitalize first letter6
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Add event listeners to choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playGame(choice.id);
    });
});