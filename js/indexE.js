var myVar;
var noscore = 0;
function press() {
	noscore++;
	myVar = setInterval(check, 10000);

}
press
function check() {
	if (noscore > 1)
		document.getElementById('info').innerHTML = "you lose press command + R";
}

// function test(){
// 	alert("This is working");
// }
// test();