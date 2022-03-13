const API_KEY = `4acd2b206e4eaa3f180f12740dfb3709`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>showTemperature(data));

}
const innerText = (id,innerText) => {
    document.getElementById(id).innerText =innerText;
}
const showTemperature = temperature =>{
    innerText("city",temperature.name);
    innerText("temperature",temperature.main.temp);
    innerText("weather",temperature.weather[0].main);
    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute('src',url)

    console.log(temperature);
}