var QuoteMachine = (function(){

	function changeQuote() {
		console.log("trigger changeQuote");
		var quotes = ["Don't cry because it's over, smile because it happened@Dr. Seuss", "In the end, it's not the years in your life that count. It's the life in your years.@Abraham Lincoln", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.@Albert Einstein", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.@Bernard M. Baruch", "A room without books is like a body without a soul.@Marcus Tullius Cicero", "So many books, so little time.” @Frank Zappa", "Be the change that you wish to see in the world.@Mahatma Gandhi", "If you tell the truth, you don't have to remember anything.@Mark Twain"],
			num = Math.floor(Math.random() * quotes.length),
			quotes = quotes[num].split("@"),
			$quoteHolder = $(".pt-page-current").find('#quote'),
			$authorHolder = $(".pt-page-current").find('#author'),
			prev = 0;

		while(num == prev){
			num = Math.floor(Math.random()* quotes.length);
		}
		console.log("Begin append code");
		prev = num;
		

		$quoteHolder.empty().append('"' + quotes[0] + '"').addClass('hvr-wobble-bottom rotateInUpLeft ');
		$authorHolder.empty().append(quotes[1]).addClass('hvr-buzz ');
	};//end function

	$( '#iterateEffects' ).on('click', changeQuote);

})();