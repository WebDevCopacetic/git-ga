/* console.log("Up and running!");
// Memory Card Game JS code

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree); */

/* var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped queen");

var cardTwo = cards[1];
cardsInPlay.push("cardTwo");
console.log("User flipped king"); */

// created an array that stores all cards 
var cards = ["queen", "queen", "king", "king"];

// array that stores the cards in play
var cardsInPlay = []; 

// function to check for a match
var checkForMatch = function () {

if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
			} else { 
		alert("Sorry, try again.");
		} 	
	};
// function to represent a user flipping a card
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
	



	
	
	