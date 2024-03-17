const textInput = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const resultText = document.getElementById('result-text')

const checkInput = () => {
  if (textInput.value === '') {
    alert('Por favor, digite um valor!')
    return
  }

  const cleanedText = cleanInputString(textInput.value)

  const arrayText = cleanedText.split('')

  const reversedText = reverseText(arrayText)

  console.log(cleanedText)
  console.log(reversedText)

  displayResult()
  if (isPalindrome(cleanedText, reversedText)) {
    resultText.innerHTML = `<span>${textInput.value}</span> é um palíndromo.`
  } else {
    resultText.innerHTML = `<span>${textInput.value}</span> não é um palíndromo.`
  }
  console.log(isPalindrome(cleanedText, reversedText))
}

function cleanInputString(str) {
  const regex = /[\W_]/g;
  // /[^a-z\^s]/g;

  str = str.toLowerCase()
  
  return str.replace(regex, "")
}

const reverseText = (arr) => arr.reverse().join('')

const isPalindrome = (arr1, arr2) => arr1 === arr2 

const displayResult = () => resultText.classList.remove('hide')


checkBtn.addEventListener('click', checkInput)
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if(event.key === 'Enter') {
    checkInput()
  }
}