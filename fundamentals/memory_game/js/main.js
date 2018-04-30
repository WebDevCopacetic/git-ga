// created an array that stores all cards and includes the objects for each card 
var cards = [
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
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].cardImage);

	console.log("User flipped " + cards[cardId].suit);


	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

// calls the first and third card out of the 4 avaialble. King and Queen of hearts. 

flipCard(0);
flipCard(2);
	



	
	
	