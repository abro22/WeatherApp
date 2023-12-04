// const weatherContainer = document.getElementById("weather-container")

// const { json } = require("express")




function weatherInfo() {
    const city = document.getElementById("search").value
    fetch(`/weatherapp/${city}`)
        .then((response) => {

            console.log(response)

            return response.json()
        })
        .then((json) => {
            console.log(json)

            const data = json

            console.log(data)


            document.querySelector(".city").textContent = data.city;
            document.querySelector(".temp").textContent = data.temp + "°C";
            document.querySelector(".tempType").textContent = data.condition;
            document.querySelector(".precipitation").textContent = data.precipitation;



        })
}

// <h2 id="city"></h2>
// <h3 id="temp"></h3>
// <h3 id="tempType"></h3>
// <h3 id="precipitation"></h3>

// const cityName = document.getElementById("cityName")
