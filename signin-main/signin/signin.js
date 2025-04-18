// signin.js
document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const foundUser = users.find(user =>
    user.email === emailInput && user.password === passwordInput
  );

  if (foundUser) {
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    alert(`Bun venit, ${foundUser.name}!`);
    window.location.href = '../pagina-principala.html/index.html'; // Redirecționează la pagina principală
  } else {
    alert('Email sau parolă greșită.');
  }
});