

var apple = new Fruit('apple', 5, 0);
var orange = new Fruit('orange', 4, 0);
var banana = new Fruit('banana', 6, 0);
var grape = new Fruit('grape', 7, 0);



var fruitArray = [apple, orange, banana, grape];

$(document).ready(function(){

for (var i = 0; i < fruitArray.length; i++) {
	var newCell = $('<td><div>' + fruitArray[i].name + '</div><p>' + fruitArray[i].amountPurchased + '</p>' + '<button data-id="' + i + '">buy</button>' +
	'<p>market price: <span id="market">X</span></p>' +
	'<p>average price</p>' +
	'</td>');

	// newButton.addClass('button-' + fruitArray[i]);
	// newButton.data('fruit-' + fruitArray[i]);
	$('body').append(newCell);

}


$('button').on('click', function(){
	console.log($(this).data('id'));
	// var fruitName = $(this).data().name;
	fruitArray[$(this).data('id')].amountPurchased++;
	$(this).prev().text(fruitArray[$(this).data('id')].amountPurchased);
});

//then access that objects amount purchased property and increment
//var fruitPurchased = $(this).data('id');
//fruitPurchased.amountPurchased + 1;
//console.log(this);
});

// for (var i = 0; i < fruitArray.length; i++) {
// 	var marketPrice = randomNumber(fruitArray[i].startingPrice);
//
// }

// });

function Fruit (name, startingPrice, amountPurchased) {
	this.name = name;
	this.startingPrice = startingPrice;
	this.amountPurchased = amountPurchased;
}

// creating market value price function

// setInterval(function marketValuePrice() {
//
// })


// average price function
function averagePrice() {

}


//finds random market price from .01 - .50 within the limits of .50 - 9.99
function randomMarketPrice(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min).toFixed(2);
	// console.log('taco');
}


setInterval(function() { $('#market').text('purple'); }, 3000);
// setInterval(randomMarketPrice(), 15000);


// setInterval(randomMarketPrice(1, 1.5), 1000);
