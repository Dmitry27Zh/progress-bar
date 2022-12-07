const progressBar = document.querySelector('.progress-bar')
const computedWidth = getComputedStyle(progressBar).getPropertyValue('--width') ?? 0
let currentWidth = parseFloat(computedWidth)

const timerId = setInterval(() => {
  currentWidth += 0.2
  progressBar.style.setProperty('--width', currentWidth)

  if (currentWidth >= 100) {
    clearInterval(timerId)
  }
}, 10)
