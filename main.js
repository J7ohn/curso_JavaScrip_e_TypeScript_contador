function seconds(s) {
    const date = new Date(s * 1000)
    return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
}

const timer = document.querySelector('.timer')
let time
let sec = 0

function initTime() {
    time = setInterval(function () {
        sec++;
        timer.innerHTML = seconds(sec)
    }, 1000)
}

document.addEventListener('click', function (event) {
    const element = event.target

    if (element.classList.contains('play')) {
        timer.classList.remove('paused')
        clearInterval(time)
        initTime()
    }

    if (element.classList.contains('pause')) {
        clearInterval(time)
        timer.classList.add('paused')
    }

    if (element.classList.contains('reset')) {
        timer.classList.remove('paused')
        clearInterval(time)
        timer.innerHTML = '00:00:00'
        sec = 0
    }
})




