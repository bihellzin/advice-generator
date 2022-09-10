async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const adviceIdElement = document.querySelector('#advice-id')
    const adviceElement = document.querySelector('.advice')
    adviceIdElement.textContent = data.slip.id
    adviceElement.textContent = data.slip.advice
}

getAdvice()

const button = document.querySelector('.dice')
button.addEventListener('click', getAdvice)