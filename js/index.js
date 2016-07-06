var uscore = 0;

var highscore = 300;

var press = function() {
	uscore++;
	document.getElementById('score').innerHTML = "Best Points NA: " + uscore;

	if (uscore>highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore (GET A LIFE): " + uscore;
		return;

	}
};