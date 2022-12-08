const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.body;
let interval = null;
buttonStart.addEventListener('click', switchingStart)
buttonStop.addEventListener('click', switchingStop)

buttonStop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function switchingStart() {
    buttonStop.removeAttribute('disabled', false)
    buttonStart.setAttribute('disabled', true)
    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
}
function switchingStop() {
    buttonStop.setAttribute('disabled', true)
    buttonStart.removeAttribute('disabled', false)
    clearInterval(interval);
}
