const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      window.location.href = "signin/index.html"; // dacă nu e logat, merge la Sign In
    } else {
      document.getElementById("username").textContent = loggedInUser.name;
    }

    function logout() {
      localStorage.removeItem("loggedInUser");
      window.location.href = "signin/index.html";
    }