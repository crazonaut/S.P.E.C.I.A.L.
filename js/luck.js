function press() {
	var number=math.floor(math.random()*18)
	if (number===3){
		window.location.replace('youwin.html')
	};
	else{
		document.getElementById('thing').innerHTML = "YOU FAILED! Press command+r to try again, or command+q if you give up :3";
	}
};