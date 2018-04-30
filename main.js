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

// function will check for a match
var checkForMatch = function () {

// checks to see if the first and second card are a match
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
			} else { 
		alert("Sorry, try again.");
		} 	
	};

// function that shows a user flipping a card
var flipCard = function () {

	cardId = this.getAttribute("data-id");
	console.log(cardId);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

// Will call createBoard funtion to create the board. 

createBoard();



	
	
	