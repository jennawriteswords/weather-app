function giveTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  let dateTime = document.querySelector("#date-and-time");
  dateTime.innerHTML = day + " " + hour + ":" + minute;
}

giveTime();

function showTemperature(response) {
  let temp = document.querySelector("#temp");
  let degrees = Math.round(response.data.main.temp);
  temp.innerHTML = `${degrees}°C`;
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-name");
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  let city = input.value;
  let apiKey = "b81214d7dc51d729ec2db083181120c3";
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let search = document.querySelector("#city-search");
search.addEventListener("submit", searchCity);

function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "b81214d7dc51d729ec2db083181120c3";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let coordsApiUrl = `${apiEndPoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${lat}, ${lon}`;
  axios.get(coordsApiUrl).then(showTemperature);
}

let current = document.querySelector("#current");
current.addEventListener("click", retrievePosition);
