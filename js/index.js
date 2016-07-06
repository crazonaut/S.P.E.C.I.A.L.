var uscore = 0;

var highscore = 300;

var press = function() {
	uscore++;
	document.getElementById('score').innerHTML = "Points: " + uscore;

	if (uscore>highscore) {
		document.getElementById('hiscore').innerHTML = "You have won";
		return
	}
	// if (uscore=300) {
	// 	document.getElementById('')
	// }
};