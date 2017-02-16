var apple = new Fruit('apple', 5, 0);
var orange = new Fruit('orange', 4, 0);
var banana = new Fruit('banana', 6, 0);
var grape = new Fruit('grape', 7, 0);

var fruitArray = [apple, orange, banana, grape];

$(document).ready(function(){

	for (var i = 0; i < fruitArray.length; i++) {
		var newCell = $('<td><div>' + fruitArray[i].name + '</div><p>' + fruitArray[i].amountPurchased + '</p>' + '<button data-id="' + i + '">buy</button>' +
		'<p>market price: <span id="market' + i + '">' + fruitArray[i].startingPrice + '</span></p>' +
		'<p>average price</p>' +
		'</td>');
		$('body').append(newCell);
	}

	$('button').on('click', function(){
		console.log($(this).data('id'));
		// var fruitName = $(this).data().name;
		fruitArray[$(this).data('id')].amountPurchased++;
		$(this).prev().text(fruitArray[$(this).data('id')].amountPurchased);
	});
});

function Fruit (name, startingPrice, amountPurchased) {
	this.name = name;
	this.startingPrice = startingPrice;
	this.amountPurchased = amountPurchased;
}
// left off here - needs ramdomization
setInterval(function(){
	for (var i = 0; i < fruitArray.length; i++) {
	 var updatedPrice = randomMarketPrice(1, 10);
	 $('#market' + i).html(fruitArray[i].startingPrice);
 }
 }, 3000);

 function randomMarketPrice(min, max) {
 	return Math.floor(Math.random() * (1 + max - min) + min).toFixed(2);
 }
