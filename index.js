const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para design gráfico",
        "Um sistema operacional",
        "Uma linguagem de programação de alto nível",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "var",
        "vrb",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade, sem verificar o tipo",
        "Atribui um valor a uma variável",
        "Compara dois valores para igualdade, verificando o tipo",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um único valor",
        "Uma estrutura de controle de fluxo",
        "Uma coleção ordenada de valores",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adiciona um elemento ao DOM",
        "Adiciona um ouvinte de evento a um elemento",
        "Remove um elemento do DOM",
      ],
      correta: 2
    },
    {
      pergunta: "Como você comentaria uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis de escopo global, enquanto 'const' é usado para variáveis de escopo local",
        "'let' permite reatribuição de valor, enquanto 'const' não permite",
        "'let' é usado para números, enquanto 'const' é usado para strings",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar objetos",
        "Uma linguagem de programação para interações com o usuário",
        "A representação do documento HTML como uma árvore de objetos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador ternário em JavaScript?",
      respostas: [
        "Realiza uma operação matemática com três operandos",
        "Substitui a estrutura 'if-else' em casos simples",
        "Conecta três variáveis em uma expressão",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevação de variáveis e funções no escopo global",
        "Um método de ordenação de código",
        "Uma técnica de otimização de desempenho",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  //retira da tela o termo "Resposta A"
  quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  