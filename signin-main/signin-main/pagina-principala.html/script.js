// Verifică dacă utilizatorul este logat
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {
  name: "Utilizator",
};
document.getElementById("username").textContent = loggedInUser.name;

// Dacă utilizatorul nu este logat, redirecționează la sign-in
if (!localStorage.getItem("loggedInUser")) {
  // window.location.href = "../signin/index.html"; // Comentat pentru testare
  console.warn("Niciun utilizator logat. Folosind utilizator implicit.");
}

// Funcție pentru deconectare
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../signin/index.html";
}

// Funcție pentru afișarea mașinii
function showCar() {
  console.log("showCar() apelată"); // Log pentru depanare
  const zodiacSelect = document.getElementById("zodiac-select").value;
  const resultContainer = document.getElementById("result");
  console.log("Zodie selectată:", zodiacSelect); // Log pentru depanare
  console.log("Container rezultat:", resultContainer); // Log pentru depanare

  // Verifică dacă a fost selectată o zodie
  if (!zodiacSelect) {
    resultContainer.innerHTML = "<p>Te rog selectează o zodie!</p>";
    console.log("Eroare: Nicio zodie selectată"); // Log pentru depanare
    return;
  }

  // Lista de mașini
  const cars = [
    { name: "Dodge Viper", description: "Puternică și îndrăzneață, perfectă pentru aventuri!" },
    { name: "Land Rover Defender", description: "Stabilă și de încredere, gata pentru orice teren." },
    { name: "Mini Cooper", description: "Veselă și versatilă, ideală pentru oraș." },
    { name: "Volvo XC90", description: "Sigură și confortabilă, perfectă pentru familie." },
    { name: "Lamborghini Aventador", description: "Extravagantă și în centrul atenției." },
    { name: "Toyota Prius", description: "Practică și eficientă, pentru un stil de viață sustenabil." },
    { name: "Mercedes-Benz SLK", description: "Elegantă și rafinată, pentru gusturi fine." },
    { name: "Porsche 911 Turbo", description: "Misterioasă și puternică, plină de adrenalină." },
    { name: "Jeep Wrangler", description: "Gata de aventură, pentru spirite libere." },
    { name: "BMW Seria 7", description: "Profesională și sofisticată, pentru succes." },
    { name: "Tesla Model S", description: "Inovatoare și futuristică, pentru vizionari." },
    { name: "Mazda MX-5", description: "Visătoare și romantică, perfectă pentru escapade." },
  ];

  // Alege o mașină aleatoriu
  const randomCar = cars[Math.floor(Math.random() * cars.length)];
  console.log("Mașină selectată:", randomCar); // Log pentru depanare

  // Afișează rezultatul
  resultContainer.innerHTML = `
    <h3>Mașina ta ideală:</h3>
    <p>${randomCar.name} - ${randomCar.description}</p>
  `;
}