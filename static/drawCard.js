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
// 카드를 생성하는 함수
function createCard(id) {
  const card = document.createElement('div');
  card.classList.add('card', 'hidden'); // 카드를 처음에는 뒷면이 보이도록 설정
  card.dataset.id = id; // 카드 id는 배정해주어야 함

  // 카드 클릭 이벤트 핸들러 추가
  card.addEventListener('click', () => selectCard(card));

  return card;
}

// 카드를 화면에 차례로 나타나게 하는 함수
function revealCards() {
  const cards = Array.from(document.querySelectorAll('.card'));

  cards.forEach((card, index) => {
      setTimeout(() => {
          card.classList.add('appear');
      }, index * 50); // 각 카드가 50ms 간격으로 나타나도록 설정
  });
}

// 카드를 선택하는 함수
function selectCard(card) {
  if (selectedCards.length < 3 && !card.classList.contains('selected')) {
      card.classList.add('selected');
      selectedCards.push(cards[card.dataset.id]); // 카드의 텍스트를 배열에 추가
      updateSelectedCards();
  }
}

// 선택된 카드를 업데이트하는 함수
function updateSelectedCards() {
  selectedCardContainer.innerHTML = '';
  selectedCards.forEach(cardText => {
      const selectedCard = document.createElement('div');
      selectedCard.className = 'selected-card';
      selectedCard.innerText = cardText;
      selectedCardContainer.appendChild(selectedCard);
  });

  // 선택한 카드의 텍스트를 hidden input에 저장
  document.getElementById('cards-input').value = selectedCards.join(', ');
}

// 카드 생성 및 초기화
for (let i = 1; i <= 78; i++) {
  const card = createCard(i);
  cardContainer.appendChild(card);
}

// 카드 셔플
shuffleCards();

// 카드가 순차적으로 나타나도록 트리거
setTimeout(revealCards, 100);

// 선택 완료 버튼 클릭 시
submitButton.addEventListener('click', (event) => {
  if (selectedCards.length !== 3) {
      event.preventDefault();
      alert('카드를 3장 선택하세요.');
  }
});