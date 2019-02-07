"use strict";

let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function shuffledDeck(min, max) {
  let cardOrder = [];
  while (cardOrder.length < cards.length) {
    let cardId = getRandomArbitrary(min,max);
    if (!cardOrder.includes(cardId)) {
      cardOrder.push(cardId);
    }
  }
  return cardOrder;
}
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    let modal = document.getElementById('myModal');
    if (cardsInPlay[0] === cardsInPlay[1]) {
      //alert("You found a match!");
      document.getElementById('win').style.display = 'block';
      document.getElementById('lose').style.display = 'none';
    } else {
      //alert("Sorry, try again.");
      document.getElementById('lose').style.display = 'block';
      document.getElementById('win').style.display = 'none';
    }
    modal.style.display = 'block';
  }
}
function flipCard() {
  let id = this.getAttribute('data-id');
  this.setAttribute('src', cards[id].cardImage);
  cardsInPlay.push(cards[id].rank);
  checkForMatch();
}
function flipBack() {
  cardsInPlay = [];
  let boardImgs = document.getElementById('game').getElementsByTagName('img');
  for (let i = 0; i < cards.length; i++) {
    boardImgs[i].setAttribute('src', 'images/back.png');
  }
}
function createBoard() {
  let cardsRando = shuffledDeck(0,4);
  for (let i = 0; i < cardsRando.length; i++) {
    let cardEl = document.createElement('img');
    cardEl.setAttribute('src', 'images/back.png');
    cardEl.setAttribute('data-id', cardsRando[i]);
    cardEl.addEventListener('click', flipCard);
    document.getElementById('game').appendChild(cardEl);
  }
}
function resetBoard() {
  document.getElementById('game').innerHTML = '';
  cardsInPlay = [];
  createBoard();
}
// modal
let modal = document.getElementById('myModal');
// modal close and shuffle the deck
let shuf = document.getElementsByClassName("shuffle")[0];
shuf.onclick = function() {
  modal.style.display = "none";
  resetBoard();
}
let repl = document.getElementsByClassName("replay")[0];
repl.onclick = function() {
  modal.style.display = "none";
  flipBack();
}
// bonus modal close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    flipBack();
  }
}
createBoard();
