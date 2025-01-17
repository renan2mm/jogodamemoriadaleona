document.addEventListener('DOMContentLoaded', () => {
    //opções de cartas
    const cards = [
      {
        name: '01',
        img: 'images/01.png'
      },
      {
        name: '02',
        img: 'images/02.png'
      },
      {
        name: '03',
        img: 'images/03.png'
      },
      {
        name: '04',
        img: 'images/04.png'
      },
      {
        name: '05',
        img: 'images/05.png'
      },
      {
        name: '06',
        img: 'images/06.png'
      },
      {
        name: '01',
        img: 'images/01.png'
      },
      {
        name: '02',
        img: 'images/02.png'
      },
      {
        name: '03',
        img: 'images/03.png'
      },
      {
        name: '04',
        img: 'images/04.png'
      },
      {
        name: '05',
        img: 'images/05.png'
      },
      {
        name: '06',
        img: 'images/06.png'
      }
    ]
  
    //embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random())
  
    //recupaerar elementos
    const board = document.querySelector('.board')
    const resultView = document.querySelector('#result')
    let cardsChosen = [] //cartas escolhidas
    let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
    let cardsWon = [] //cartas combinadas
  
    //criar o quadro de cartas
    function createBoard() {
      for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/board.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        board.appendChild(card)
      }
    }
  
    //checagem de combinações
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      //verificar clique na mesma imagem 
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/board.png')
        cards[optionTwoId].setAttribute('src', 'images/board.png')
        
      }
      //verificar combinação se click em imagens diferentes
      else if (cardsChosen[0] === cardsChosen[1]) {
      
        cards[optionOneId].setAttribute('src', 'images/check.png')
        cards[optionTwoId].setAttribute('src', 'images/check.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/board.png')
        cards[optionTwoId].setAttribute('src', 'images/board.png')
        
      }
      cardsChosen = []
      cardsChosenId = []
      //mostrar placar
      resultView.textContent = 'Pares Encontrados: '+cardsWon.length
      if  (cardsWon.length === cards.length/2) {
        resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
      }
    }
  
    //virar as cartas
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 1000)
      }
    }
  
    createBoard()
  })
  