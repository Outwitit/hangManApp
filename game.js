window.onload = function(){
	var phrase = "reach for the sky";
	var lives = 8;
	var counter;
 	var phraseArray = ['r','e','a','c','h','f','o','t','s','k','y'];

 	var incorrectGuessArray = ['b','d','g','i','j','l','m','n','p','q','u','v','w','x', 'y','z'];

	var alphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m',
 					'n','o','p','q','r','s','t','u','v','w','x','y','z'];


    

 	
    var userText = document.getElementById('userText');

    document.onkeyup = function (event){
    	userText.textContent = event.key;

    };

    

	// Show lives
	
	comments = function () {
		showLives.innerHTML = "You have " + lives + " lives";
		if (lives < 1) {
		  showLives.innerHTML = "Game Over";
		}
		for (var i = 0; i < geusses.length; i++) {
		  if (counter + space === geusses.length) {
		    showLives.innerHTML = "You Win!";
		  }
		}
	}

};    


