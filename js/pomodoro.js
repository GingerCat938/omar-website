// Pomodoro Timer Script
let pomodoroDuration = 25 * 60;
let timerInterval;
let remainingTime = pomodoroDuration;
let isRunning = false;

function updatePomodoroDisplay() {
    const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
    const seconds = (remainingTime % 60).toString().padStart(2, '0');
    const timerEl = document.getElementById('pomodoro-timer');
    if (timerEl) {
        timerEl.textContent = `${minutes}:${seconds}`;
    }
}

function startPomodoro() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updatePomodoroDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert("Pomodoro completato! Fai una pausa.");
            if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
        }
    }, 1000);
}

function pausePomodoro() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetPomodoro() {
    clearInterval(timerInterval);
    remainingTime = pomodoroDuration;
    isRunning = false;
    updatePomodoroDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    updatePomodoroDisplay();
});
