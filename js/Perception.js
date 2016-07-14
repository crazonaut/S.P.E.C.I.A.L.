var tries = 0;

var passwordCheck = document.querySelector('#passwordForm');
passwordCheck.addEventListener('submit', function(event) {
  event.preventDefault();
  passwordInput = this.querySelector('input').value;
  console.log("User entered "+passwordInput);
  tries++;
  if (passwordInput == 'you can literally type anything') {
  	window.location.replace('Charisma.html')
  }
  else{
  	document.getElementById('lel').innerHTML = "You failed "+tries+" times! Try Again!";
  	if (tries >= 10) {
  		document.getElementById('lel').innerHTML = "Too Many Failed Attempts!";
  		setTimeout(function(){
  			window.location.replace('index.html');
  		},3000)
  	}
  }
});