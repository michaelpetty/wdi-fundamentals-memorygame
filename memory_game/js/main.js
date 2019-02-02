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
function flipCard(cardId) {
  console.log("User flipped a " + cards[cardId].rank);
  console.log("in the suit of " + cards[cardId].suit);
  console.log("and an image at " + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}

flipCard(0);
flipCard(2);
