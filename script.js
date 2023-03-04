let place_name = "Delhi";
let key = "a39b5d80310f08df20709f440d4e5bf3"

function func() {
    let place = document.getElementById("searcher");
    place_name = place.value;
    console.log(place_name);
    fetchWeather();
}

async function fetchWeather() {
    let url ="https://api.openweathermap.org/data/2.5/weather?q=" +
    place_name + "&appid=" + key + "&units=metric";

    const res = await fetch(url);
    const data = await res.json();
    const { name } = data;
    const { temp } = data.main;

    document.getElementById("Weatherin").innerHTML = "Weather in " + name;
    document.getElementById("Temp").innerHTML = temp+"°C";
}

fetchWeather();