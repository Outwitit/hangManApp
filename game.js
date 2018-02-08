// var alphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m',
// 				'n','o','p','q','r','s','t','u','v','w','x','y','z'];

window.onload = function(){
	var phrase = "reach for the sky";
	var phraseArray = ['r','e','a','c','h','f','o','t','s','k','y'];
	var lives;
	var counter;


	// When page loads
	var ready = prompt("Ready to play? yes/no");
	if(ready === "yes"){
		
	} else {
		alert("Don't be a weenie. It's game time.");
	}

	//When user presses any letter key 



	// User lives
	var showLives = document.getElementById("mylives");
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
}




//Make hangman appear if user guesses incorrectly. 