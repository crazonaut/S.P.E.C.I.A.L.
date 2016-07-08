function correct() {
	console.log("YAY");
	window.location.replace('Charisma2.html');
}
function incorrect() {
	console.log("NO");
	document.getElementById('question').innerHTML = "YOU FAILED! Press command+r to try again, or command+q if you give up :3";
}