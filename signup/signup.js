document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validare email: trebuie să fie @gmail.com, @mail.ru sau @yahoo.com
  const validDomains = ["@gmail.com", "@mail.ru", "@yahoo.com"];
  const hasValidDomain = validDomains.some(domain => email.toLowerCase().endsWith(domain));
  if (!hasValidDomain) {
    alert("Emailul trebuie să fie de la @gmail.com, @mail.ru sau @yahoo.com.");
    return;
  }

  // Validare parolă: minim 8 caractere, o literă mare și o cifră
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Parola trebuie să aibă minim 8 caractere, cel puțin o literă mare și o cifră.");
    return;
  }

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