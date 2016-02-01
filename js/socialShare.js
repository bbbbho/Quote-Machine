$(document).ready(function(){
		twitterMsg()
	});

	function twitterMsg(){
		//forming url 
		console.log("trigger twitter change")
		$('#twitter').empty();
		//add DOM
		setTimeout(
		function() {
			$quote = $(".pt-page-current").find('#quote').text().replace(/"/g,"");
			$author = $(".pt-page-current").find('#author').text();
			$quote = encodeURIComponent($quote.trim());
			$author = encodeURIComponent($author.trim());	
			console.log('quote: ' + $quote)
			console.log('author: '+ $author)

			$link = "https://twitter.com/intent/tweet?text=" + $quote + "&via=bbbb.ho";
			console.log('link: ' +  $link)
			$('#twitter').append("<a class='fa fa-twitter' href ='" + $link  + "' data-size = 'large'>Tweet</a>")
		},1500)

	}
	
	$( '#iterateEffects' ).on('click', twitterMsg );

window.twttr = (function (d, s, id) {
            var t, js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            return window.twttr || (t = {
                _e: [],
                ready: function (f) {
                    t._e.push(f)
                }
            });
        }(document, "script", "twitter-wjs"));
