var uscore = 0;
var myVar;
function press() {
	 	uscore++;
	document.getElementById('score').innerHTML = "Points: " + uscore;
    myVar = setInterval(check, 40000);
}

function check(){
 if (uscore < 300){
  document.getElementById('hiscore').innerHTML = "YOU FAILED! Press command+r to try again.";
  uscore = 0;
  clearInterval(myVar);

 } else {
  console.log("You Win");
  // window.location.replace('google.com')
  clearInterval(myVar);
 }
};


