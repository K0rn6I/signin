document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Luăm toți utilizatorii existenți
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Verificăm dacă emailul există deja
  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    alert("Emailul este deja folosit.");
    return;
  }

  // Adăugăm noul user în array
  users.push({ name, email, password });

  // Salvăm array-ul actualizat în localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cont creat cu succes!");
  window.location.href = "index.html"; // redirect către Sign In
});
