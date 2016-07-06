var uscore = 0;

var highscore = 300;

var press = function() {
	uscore++;
	document.getElementById('score').innerHTML = "Points: " + uscore;

	if (uscore>highscore) {
<<<<<<< HEAD
		document.getElementById('hiscore').innerHTML = "STUFF HAPPENS NOW!";
		return;

=======
		document.getElementById('hiscore').innerHTML = "You have won";
		return
>>>>>>> origin/master
	}
};