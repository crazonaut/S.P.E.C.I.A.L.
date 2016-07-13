var loses = 0;

function press() {
	var number = Math.floor(Math.random()*10);
	console.log(number);
	loses++;
	if (number===3) {
		window.location.replace('youwin.html')

	}
	else{
		window.location.replace('intelligence3.html')
		console.log('lel')
	} 

}

