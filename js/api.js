const API_KEY = `4acd2b206e4eaa3f180f12740dfb3709`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>showTemperature(data));

}
const showTemperature = temperature =>{
    console.log(temperature);
}