let randomnumber = Math.floor(Math.random() * 100) + 1;

function makeguess() {
    const userGuess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    
    if (userGuess == randomnumber) {
        message.textContent = "Wow! You should gamble!";
        message.style.color = 'purple';
        resetGame();
    } else if (userGuess > randomnumber) {
        message.textContent = "Too high. Don't jump.";
        message.style.color = 'red';
    } else if (userGuess < randomnumber) {
        message.textContent = "Too low. You should play limbo.";
        message.style.color = 'red';
    }
}

function resetGame() {
    randomnumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess-input').value = '';
    
}
