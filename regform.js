const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Registration data:', { username, email, password });
});
