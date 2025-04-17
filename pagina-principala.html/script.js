const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
  window.location.href = 'signin/signin.html';
} else {
  document.getElementById('username').textContent = loggedInUser.name;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'signin/signin.html';
}
