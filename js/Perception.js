
<<<<<<< HEAD

var passwordCheck = document.querySelector('#passwordForm');
passwordCheck.addEventListener('submit', function(event) {
  event.preventDefault();
  passwordInput = this.querySelector('input').value;
  console.log("User entered "+passwordInput);
  if (passwordInput == 'you can literally type anything') {
  	window.location.replace('Charisma.html')
  }
  else{
  	document.getElementById('lel').innerHTML = "YOU FAILED! Try Again!";
  }
=======
	if (input_box ==='HELLO'){
		document.getElementById('link').href = google.com
	}
>>>>>>> origin/master
});