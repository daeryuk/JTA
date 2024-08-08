let selectedCards = [];
const cardContainer = document.querySelector('.card-container');
const selectedCardContainer = document.querySelector('.selected-card-container');
const submitButton = document.getElementById('submit-button');
const cards = {
    1: "The Fool",
    2: "The Magician",
    3: "The High Priestess",
    4: "The Empress",
    5: "The Emperor",
    6: "The Hierophant",
    7: "The Lovers",
    8: "The Chariot",
    9: "Strength",
    10: "The Hermit",
    11: "Wheel of Fortune",
    12: "Justice",
    13: "The Hanged Man",
    14: "Death",
    15: "Temperance",
    16: "The Devil",
    17: "The Tower",
    18: "The Star",
    19: "The Moon",
    20: "The Sun",
    21: "Judgement",
    22: "The World",
    23: "The Ace of Wands",
    24: "The Two of Wands",
    25: "The Three of Wands",
    26: "The Four of Wands",
    27: "The Five of Wands",
    28: "The Six of Wands",
    29: "The Seven of Wands",
    30: "The Eight of Wands",
    31: "The Nine of Wands",
    32: "The Ten of Wands",
    33: "The Page of Wands",
    34: "The Knight of Wands",
    35: "The Queen of Wands",
    36: "The King of Wands",
    37: "The Ace of Cups",
    38: "The Two of Cups",
    39: "The Three of Cups",
    40: "The Four of Cups",
    41: "The Five of Cups",
    42: "The Six of Cups",
    43: "The Seven of Cups",
    44: "The Eight of Cups",
    45: "The Nine of Cups",
    46: "The Ten of Cups",
    47: "The Page of Cups",
    48: "The Knight of Cups",
    49: "The Queen of Cups",
    50: "The King of Cups",
    51: "The Ace of Swords",
    52: "The Two of Swords",
    53: "The Three of Swords",
    54: "The Four of Swords",
    55: "The Five of Swords",
    56: "The Six of Swords",
    57: "The Seven of Swords",
    58: "The Eight of Swords",
    59: "The Nine of Swords",
    60: "The Ten of Swords",
    61: "The Page of Swords",
    62: "The Knight of Swords",
    63: "The Queen of Swords",
    64: "The King of Swords",
    65: "The Ace of Pentacles",
    66: "The Two of Pentacles",
    67: "The Three of Pentacles",
    68: "The Four of Pentacles",
    69: "The Five of Pentacles",
    70: "The Six of Pentacles",
    71: "The Seven of Pentacles",
    72: "The Eight of Pentacles",
    73: "Nine of Pentacles",
    74: "Ten of Pentacles",
    75: "Page of Pentacles",
    76: "Knight of Pentacles",
    77: "Queen of Pentacles",
    78: "King of Pentacles"
};

// 카드를 생성하는 함수
function createCard(id) {
  const cardContainer = document.querySelector('.card-container');
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('hidden'); // 카드를 처음에는 뒷면이 보이도록 설정
  card.dataset.id = id; // 카드 id는 배정해주어야 함

  //const cardTitle = document.createElement('h2');
  //cardTitle.textContent = id; // 카드의 번호를 제목으로 설정

  //card.appendChild(cardTitle);
  cardContainer.appendChild(card); // 카드 72장 펼치기

  // 클릭해서 선택
  card.addEventListener('click', () => selectCard(card));
}

// 카드를 선택하는 함수
function selectCard(card) {
    // 선택된 카드의 개수가 3개라면 더 이상 선택할 수 없음
    if (selectedCards.length === 3 || selectedCards.includes(card.dataset.id)) {
      return;
    }
  
    // 선택된 카드의 id를 selectedCards 배열에 추가
    selectedCards.push(card.dataset.id); // 이거 없으면 제목이 undefined 
    card.classList.add('selected'); // 파란색 테두리 
  
    // 선택된 카드를 선택된 카드 영역에 추가
    /*
    const selectedCardContainer = document.querySelectorAll('.selected-card');
    selectedCardContainer.forEach((container, index) => {
      if (index < selectedCards.length) {
        container.innerHTML = '';
        const clonedCard = card.cloneNode(true);
        clonedCard.classList.remove('selected'); //파란색 테두리 제거 (카드를 통째로 가져오기에 불필요한 속성을 제거해줌)
        //const cardTitle = document.createElement('h2'); // 여기에 카드 제목을 담을 거임
        //cardTitle.textContent = cards[selectedCards[index]]; // 카드 이름 설정
        //clonedCard.appendChild(cardTitle); // 이걸 풀면 선택된 카드의 제목이 보이게 된다.
        container.appendChild(clonedCard);
      }
    });
    */
}
  

// 카드를 셔플하는 함수
function shuffleCards() {
  const cardElements = document.querySelectorAll('.card');
  const cardArray = Array.from(cardElements);

  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }

  const cardContainer = document.querySelector('.card-container');
  cardArray.forEach(card => {
    cardContainer.appendChild(card);
  });
}

// 선택 완료 버튼 클릭 시 실행되는 함수
/*
document.getElementById('submit-button').addEventListener('click', () => {
    // 선택된 카드를 뒤집기
    const selectedCardContainer = document.querySelectorAll('.selected-card');
    selectedCardContainer.forEach((container, index) => {
      if (index < selectedCards.length) {
        const card = container.querySelector('.card');
        if (card) {
          card.classList.remove('hidden');
          card.classList.add('flip');
          setTimeout(() => {
            card.classList.remove('flip');
          }, 200);
          card.innerHTML = `<h3>${cards[selectedCards[index]]}</h3>`;
        }
      }
    });
});
*/
  

// 1부터 72까지의 카드를 생성
for (let i = 1; i <= 78; i++) {
  createCard(i);
}

// 카드 셔플
shuffleCards();


// Create card elements
/*
for (let id in cards) {
  let card = document.createElement('div');
  card.className = 'card hidden';
  card.dataset.id = id;
  card.innerHTML = `<h2>${cards[id]}</h2>`;
  card.addEventListener('click', () => selectCard(card));
  cardContainer.appendChild(card);
}
*/
function selectCard(card) {
  if (selectedCards.length < 3 && !card.classList.contains('selected')) {
      card.classList.add('selected');
      //card.classList.remove('hidden');
      selectedCards.push(cards[card.dataset.id]);
      updateSelectedCards();
  }
}
// 카드 정보 이동
function updateSelectedCards() {
  selectedCardContainer.innerHTML = '';
  selectedCards.forEach(card => {
      let selectedCard = document.createElement('div');
      selectedCard.className = 'selected-card';
      selectedCard.innerText = card;
      selectedCardContainer.appendChild(selectedCard);
  });
  //한 줄로 콤마로 분리한다
  document.getElementById('cards-input').value = selectedCards.join(', ');
}

// 카드 3장을 뽑아야 함
submitButton.addEventListener('click', (event) => {
  if (selectedCards.length !== 3) {
      event.preventDefault();
      alert('카드를 3장 선택하세요.');
  }
});

