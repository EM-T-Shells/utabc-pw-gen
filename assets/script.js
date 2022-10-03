setTimeout(function(){
  let leggoPWGEN = window.prompt("Ready to create cool and secure password? Type 'Yes' to continue)")
  if (leggoPWGEN.toLowerCase() === "yes"){
    passwordGeneratorForm.style.display = "grid";
    } else {
    window.location.reload();
    }
}, 500);

const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  let characterAmount = characterAmountNumber.value
  let includeLowercase = includeLowercaseElement.checked
  let includeUppercase = includeUppercaseElement.checked
  let includeNumbers = includeNumbersElement.checked
  let includeSymbols = includeSymbolsElement.checked
  let password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password 
})

function generatePassword(characterAmount,includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = []
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
    }  
  return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

//checkbox validation
function isChecked(){
  let includeLowercase = includeLowercaseElement.checked
  let includeUppercase = includeUppercaseElement.checked
  let includeNumbers = includeNumbersElement.checked
  let includeSymbols = includeSymbolsElement.checked

  // Get the modal
  let modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSymbols === false) {
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    return false  
  }
  else {
    return true;
  }
}