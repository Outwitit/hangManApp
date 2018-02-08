window.onload = function(){
	var phrase = "reach for the sky";
	// var phraseArray = ['r','e','a','c','h','f','o','t','s','k','y'];
	var lives;
	var counter;
	var alphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m',
 					'n','o','p','q','r','s','t','u','v','w','x','y','z'];



	// Show lives
	var showLives = document.getElementById("mylives");
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

    // Animate man
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
    // Hangman
  	canvas =  function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  	draw = function(pathFromx, pathFromy, pathTox, pathToy) {
    context.moveTo(pathFromx, pathFromy);
    context.lineTo(pathTox, pathToy);
    context.stroke(); 
	}

	frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  var drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 










}




//Make hangman appear if user guesses incorrectly. 