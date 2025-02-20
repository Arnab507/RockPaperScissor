function playGame(userChoice) {
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = "\nIT'S A DRAW!";
    } 
    else if (
        (userChoice === 'ROCK' && computerChoice === 'SCISSOR') ||
        (userChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (userChoice === 'SCISSOR' && computerChoice === 'PAPER')) 
    {
        result = '\nCONGRATULATION YOU \nWIN!!!!!';
    }
    else{
        result = '\nYOU LOOSE!';
    }
    
    document.getElementById('result').innerText = `YOU CHOOSE ${userChoice}
    \nCOMPUTER CHOOSE ${computerChoice}
    ${result}`;
}