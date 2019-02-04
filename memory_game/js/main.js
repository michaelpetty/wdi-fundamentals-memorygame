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

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}
function flipCard() {
  let id = this.getAttribute('data-id');
  this.setAttribute('src', cards[id].cardImage);
  cardsInPlay.push(cards[id].rank);
  checkForMatch();
}
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardEl = document.createElement('img');
    cardEl.setAttribute('src', 'images/back.png');
    cardEl.setAttribute('data-id', i);
    cardEl.addEventListener('click', flipCard);
    document.getElementById('game').appendChild(cardEl);
  }
}

//flipCard(0);
//flipCard(2);
createBoard();
