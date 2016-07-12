var loses = 0;

function press() {
	var number = Math.floor(Math.random()*18);
	console.log(number);
	loses++;
	if (number===3) {
		window.location.replace('youwin.html')

	}
	else{
		window.location.replace('intelligence.html')
	} 

}

