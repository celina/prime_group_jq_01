

var apple = new Fruit('apple', 5, 0);
var orange = new Fruit('orange', 4, 50);
var banana = new Fruit('banana', 6, 0);
var grape = new Fruit('grape', 7, 0);

var orangeAmountPurchased = orange.amountPurchased;
console.log(orangeAmountPurchased);

var fruitArray = [apple, orange, banana, grape];

$(document).ready(function(){

for (var i = 0; i < fruitArray.length; i++) {
	var newCell = $('<td><div>' + fruitArray[i].name + '</div><p data-id' + fruitArray[i].name + '>' + fruitArray[i].amountPurchased + '</p>' + '<button data-id='+ fruitArray[i].name + '>buy</button>' +
	'<p>market price</p>' +
	'<p>average price</p>' +
	'</td>');

	// newButton.addClass('button-' + fruitArray[i]);
	// newButton.data('fruit-' + fruitArray[i]);
	$('body').append(newCell);

}


$('button').on('click', function(){
var fruitThis = $(this).data('id');
console.log(fruitThis + ' was clicked');
if (fruitThis == 'orange'){
	orangeAmountPurchased = orangeAmountPurchased++;
}
//then access that objects amount purchased property and increment
//var fruitPurchased = $(this).data('id');
//fruitPurchased.amountPurchased + 1;
console.log(this);
});

// for (var i = 0; i < fruitArray.length; i++) {
// 	var marketPrice = randomNumber(fruitArray[i].startingPrice);
//
// }

});

function Fruit (name, startingPrice, amountPurchased) {
	this.name = name;
	this.startingPrice = startingPrice;
	this.amountPurchased = amountPurchased;
}

//finds random market price from .01 - .50 within the limits of .50 - 9.99
function randomMarketPrice(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
 }

var marketPriceChange = randomMarketPrice(.01, .5);
//console.log(test);
