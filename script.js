const stopwatch = () => {
    let minutes = 0
    let seconds = 0
    let tens = 0

    let appendMinutes = document.getElementById('minutes')
    let appendSeconds = document.getElementById('seconds')
    let appendTens = document.getElementById('tens')

    let stopBtn = document.getElementById('stop')
    let playBtn = document.getElementById('play')
    let resetBtn = document.getElementById('reset')
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens
        }
        if (tens > 9) {
            appendTens.innerHTML = tens
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds
            tens = 0
            appendTens.innerHTML = '0' + 0
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
        if (seconds > 59) {
            minutes++
            appendMinutes.innerHTML = '0' + minutes
            seconds = 0
            appendSeconds.innerHTML = '0' + 0
        }
    }

    playBtn.onclick = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }

    stopBtn.onclick = () => {
        clearInterval(Interval)
    }

    resetBtn.onclick = () => {
        clearInterval(Interval)
        minutes = 0
        seconds = 0
        tens = 0
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
    }
}
stopwatch()