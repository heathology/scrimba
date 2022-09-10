const currentTimeDisplay = document.getElementById("current-time-display")
const alarmTimeDisplay = document.getElementById("alarm-time-display")
const alarmMessageDisplay = document.getElementById("alarm-message-display")
document.getElementById("set-alarm-button").addEventListener("click", setAlarm)
let currentTime = null
let alarmTime = null
const audio = new Audio('bells.mp3');

function renderCurrentTime() {
    setInterval(() => {
        currentTime = new Date().toLocaleTimeString();
        currentTimeDisplay.textContent = currentTime;
        alarmChecker()
    }, 1000) // update the time every 1000 milliseconds (second)   
}
renderCurrentTime()

function setAlarm() {
    event.preventDefault() // prevents it from resetting time since we are using a form
    let wakeyHours = document.getElementById("hours-input").value
    let wakeyMins = document.getElementById("minutes-input").value

    if (wakeyMins / 10 < 1) {
        wakeyMins = "0" + wakeyMins
    }
    if (wakeyHours / 10 < 1) {
        wakeyHours = "0" + wakeyHours
    }

    alarmTime = `${wakeyHours}:${wakeyMins}:00`
    alarmTimeDisplay.textContent = alarmTime
}

function alarmChecker() {
    if (alarmTime == currentTime) {
        console.log('alarm ring')
    }
}


function ringTheAlarm() {
    audio.play()
}