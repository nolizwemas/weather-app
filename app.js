function displayDate() {
  let date = document.querySelector("#current-time");
  date.innerHTML = `${day} ${time.getHours()}:${time.getMinutes()}`;
}
let time = new Date();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

let day = days[time.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let month = months[time.getMonth()];

displayDate();

function showCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#find-city");
  let city = document.querySelector(".city");
  city.innerHTML = `${citySearch.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", showCity);

function convertTemp(event) {
  event.preventDefault();
}

function forFahrenheit() {
  let fahrenheit = document.querySelector("button.temp-toggle ");
  fahrenheit.innerHTML = "°C";
}

function forCelsius() {
  let celsius = document.querySelector("button.temp-toggle ");
}
