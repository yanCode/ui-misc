let progressCircular = document.querySelector('.progress-circular');
let value = document.querySelector('.value');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener(
  'click', changePercentage
)

function changePercentage() {
  let start = 0;
  const interval = setInterval(() => {
    start++
    value.textContent = `${start}`
    progressCircular.style.background = `conic-gradient(#880bea ${start}%, #ededed 0%)`
    if (start >= input.value) {
      clearInterval(interval)
    }
  }, 10)
}