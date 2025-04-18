document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  console.log('Email introdus:', emailInput); // Depanare
  console.log('Parolă introdusă:', passwordInput); // Depanare

  const users = JSON.parse(localStorage.getItem('users')) || [];
  console.log('Utilizatori existenți:', users); // Depanare

  const foundUser = users.find(user =>
    user.email === emailInput && user.password === passwordInput
  );

  if (foundUser) {
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    alert(`Bun venit, ${foundUser.name}!`);
    console.log('Redirecționare către pagina principală...'); // Depanare
    window.location.href = '../pagina-principala.html/index.html'; // Redirecționează la pagina principală
  } else {
    alert('Email sau parolă greșită.');
    console.log('Autentificare eșuată'); // Depanare
  }
});