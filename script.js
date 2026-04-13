// ==============================
//   CAPTURA DOS ELEMENTOS DO DOM
// ==============================

// Aqui pegamos o textarea onde o usuário digita o texto
const textArea = document.getElementById("text");

// Elemento que vai mostrar a quantidade de palavras
const quantityWord = document.getElementById("quantity-word");

// Elemento que vai mostrar a quantidade de letras
const quantityLetters = document.getElementById("quantity-caracters");

// Elemento que vai mostrar a quantidade de espaços
const numberSpaces = document.getElementById("number-of-spaces");

// Elemento que vai apagar tudo.
const clearAll =  document.getElementById("clear-all")

// const errorMessage = document.getElementById("error-message")
// (Comentado por enquanto, mas seria usado para feedback de erro)


// ==============================
//   EVENTO PRINCIPAL (INPUT)
// ==============================

// Sempre que o usuário digitar algo no textarea ("input"),
// a função contar() será executada automaticamente
textArea.addEventListener("input", contar)


// ==============================
//   FUNÇÃO PRINCIPAL (CONTAR)
// ==============================

function contar () {

  // Primeiro verificamos se o campo está vazio
  // Se estiver vazio, paramos tudo aqui
  if (campoVazio()) {
    return
  }

  // ==============================
  //   CONTAGEM DE PALAVRAS
  // ==============================

  // Pegamos o valor do textarea
  // trim() → remove espaços do início e fim
  // split(/[\s,]+/) → quebra o texto em palavras (separa por espaço ou vírgula)
  // filter(word !== "") → remove possíveis valores vazios
  // filter(regex) → garante que só palavras válidas entrem na contagem

  const words = textArea.value
    .trim()
    .split(/[\s,]+/)
    .filter(word => word !== "")
    .filter(word => /[a-zA-ZÀ-ú0-9]/.test(word))

  // Pegamos o total de palavras
  const totalWords = words.length

  // Atualizamos a interface
  quantityWord.textContent = `Palavras: ${totalWords}`


  // ==============================
  //  CONTAGEM DE LETRAS
  // ==============================

  // length conta TODOS os caracteres (incluindo espaços)
  const letters = textArea.value.length

  quantityLetters.textContent = `Caracteres: ${letters}`


  // ==============================
  //     CONTAGEM DE ESPAÇOS
  // ==============================

  // split(" ") → divide o texto em partes onde há espaço
  // length - 1 → número de espaços encontrados
  const spaces = textArea.value.split(" ").length - 1

  numberSpaces.textContent = `Espaços: ${spaces}`


  // Aqui você poderia limpar uma mensagem de erro (caso estivesse usando)
  // errorMessage.textContent = ""
}


// ==================================================
// FUNÇÃO VALIDAR CAMPO SE ESTIVER VAZIO (VALIDAÇÃO)
// ==================================================

function campoVazio () {

  // Variável para controlar se existe erro
  let isError = false

  // trim() remove espaços → evita contar "   " como conteúdo
  if (textArea.value.trim() === "") {

    // Se estiver vazio, zeramos todos os contadores
    quantityWord.textContent = "Palavras: 0"
    quantityLetters.textContent = "Caracteres: 0"
    numberSpaces.textContent = "Espaços: 0"

    // Marcamos que houve erro
    isError = true;
  }

  // Retornamos o resultado (true ou false)
  return isError;
}

// Quando o usuário clicar no botão "limpar",
// a função limparTudo será executada
clearAll.addEventListener("click", limparTudo)


// Função responsável por limpar todo o conteúdo
function limparTudo () {

    // Verifica se o textarea NÃO está vazio
    // Isso evita executar ações desnecessárias
    if (textArea.value !== "") {

      // Limpa o conteúdo digitado pelo usuário
      textArea.value = ""

      // Zera o contador de palavras para 0
      quantityWord.textContent = "Palavras: 0 "

      // Zera o contador de espaços para 0
      numberSpaces.textContent = "Espaços: 0"

      //  Zera o contador de letras para 0
      quantityLetters.textContent = " Caracteres: 0"

      // Posso chamar a função campoVazio() depois de limpar o textArea também.
    }
}