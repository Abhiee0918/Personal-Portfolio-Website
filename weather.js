async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "YOUR_API_KEY"; // get from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
  } else {
    document.getElementById("result").innerHTML = "City not found";
  }
}
