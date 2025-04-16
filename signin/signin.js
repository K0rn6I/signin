document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  // Luăm toți utilizatorii din localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Căutăm userul potrivit
  const foundUser = users.find(user =>
    user.email === emailInput && user.password === passwordInput
  );

  if (foundUser) {
    // Salvăm userul logat pentru a-l folosi pe alte pagini
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

    alert(`Bun venit, ${foundUser.name}!`);
    window.location.href = 'pagina-principala.html';
  } else {
    alert('Email sau parolă greșită.');
  }
});
