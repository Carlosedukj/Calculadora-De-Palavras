// Capturando os elementos.

const textArea = document.getElementById("text");
const quantityWord = document.getElementById("quantity-word");
const quantityLetters = document.getElementById("quantity-letters")
const numberSpaces = document.getElementById("number-of-spaces")
const errorMessage = document.getElementById("error-message")

textArea.addEventListener("input", contar)
function contar () {
  if (campoVazio()) {
    return
  }
  // contando as palavras.
  const words =  textArea.value.trim().split(/[\s,]+/)
  const totalWords = words.length
  quantityWord.textContent = `Quantidade de Palavras: ${totalWords}`
  
  // contando as letras.
  const letters = textArea.value.length
  quantityLetters.textContent = `Quantidade de Letras: ${letters}`
  
  // contando os espaços.
  const spaces = textArea.value.split(" ").length - 1
  numberSpaces.textContent = `Quantidade de espaços: ${spaces}`

  errorMessage.textContent = ""
}

function campoVazio () {
  let isError = false
  if (textArea.value.trim() === "") {
  quantityWord.textContent = "Quantidade de Palavras: 0"
  quantityLetters.textContent = "Quantidade de Letras: 0"
  numberSpaces.textContent = "Quantidade de espaços: 0"
  isError = true;
}
return isError;
  
}

