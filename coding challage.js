
    let clickCount = 0;
    let timerSeconds = 0;
    let timerInterval;

    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const timerDisplay = document.getElementById('timer');
    const userInput = document.getElementById("input")

    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    });

    timerInterval = setInterval(() => {
        timerSeconds++;
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        timerDisplay.textContent = `${minutes}:${displaySeconds}`;
    }, 1000);

userInput.addEventListener('input',() => {
    const inputValue = userInput.value;
    console.log("Input change:" + inputValue);
}, 100);
