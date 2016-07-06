var uscore = 0;

var highscore = 300;

var press = function() {
	uscore++;
	document.getElementById('score').innerHTML = "Points: " + uscore;

	if (uscore>highscore) {
<<<<<<< Updated upstream
		document.getElementById('hiscore').innerHTML = "You have won";
		return
=======
		document.getElementById('hiscore').innerHTML = "STUFF HAPPENS NOW!";
		return;

>>>>>>> Stashed changes
	}
	// if (uscore=300) {
	// 	document.getElementById('')
	// }
};