const api = "0766496ef5a273046e9a97c056c5ff7f";

async function getData(lat, lon) {
    let city = document.getElementById("city").value;
    // let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api;
    let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + api;

    let mosa = await fetch(url);
    let data = await mosa.json();
    append(data);
    // append(data)
    console.log(data);

}

function append(data) {

    let container = document.getElementById("container")
    container.innerHTML = null;

    let name = document.createElement("h2")
    name.innerText = data.name;

    let hum = document.createElement("p");
    hum.innerText = "Humidity:- " + data.main.humidity;

    let temp = document.createElement("p")
    temp.innerText = "Current temp:- " + data.main.temp;

    // let box = document.createElement("div");
    // box.append(name, base, temp)

    container.append(name, hum, temp);

    let maps = document.getElementById("map")
    maps.src = "https://maps.google.com/maps?q=" + data.name + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
}



function geolocationweather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getData(latitude, longitude)
        console.log(latitude);
        console.log(longitude);
    }

}

geolocationweather();
