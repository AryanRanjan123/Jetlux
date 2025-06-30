const form = document.getElementById('bookingForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for booking! Our team will contact you shortly.");
  form.reset();
});
const form = document.querySelector("form");
const routeDisplay = document.getElementById("route-display");
const fromCity = document.getElementById("from-city");
const toCity = document.getElementById("to-city");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const departure = document.getElementById("departure")?.value;
  const arrival = document.getElementById("arrival")?.value;

  if (departure && arrival) {
    fromCity.textContent = capitalize(departure);
    toCity.textContent = capitalize(arrival);
    routeDisplay.style.display = "block";
  }
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
