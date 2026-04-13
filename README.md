# Contador de Palavras

Um contador de texto em tempo real que analisa tudo que o usuário digita e exibe instantaneamente a quantidade de palavras, letras e espaços, sem precisar clicar em nenhum botão.

## Como usar

1. Digite qualquer texto na área indicada
2. Os contadores atualizam automaticamente enquanto você digita
3. Use o botão **Limpar** para apagar tudo e zerar os contadores

## Funcionalidades

- Contagem de palavras em tempo real (separadas por espaço ou vírgula)
- Contagem de caracteres totais
- Contagem de espaços
- Ignora caracteres especiais isolados na contagem de palavras
- Zera os contadores automaticamente quando o campo é esvaziado
- Botão de limpar que reseta tudo com um clique

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## O que aprendi construindo esse projeto

Esse foi meu segundo projeto construído do zero, sem copiar tutorial. Durante o desenvolvimento pratiquei:

- Evento `input` para capturar digitação em tempo real, sem precisar de botão
- `.split()` para quebrar texto em partes usando separadores
- `.filter()` para remover itens inválidos de um array
- `.trim()` para ignorar espaços em branco no início e fim do texto
- Expressões regulares (regex) para identificar padrões no texto
- `.length` para contar caracteres e itens de array
- Organização do código em funções com responsabilidades separadas
- Validação de campo vazio com retorno de `true` e `false`
- Template literals para atualizar texto na tela dinamicamente
