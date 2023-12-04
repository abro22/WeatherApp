const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))

const weather = [
    {
        city: "Louisville",
        temp: "63",
        condition: "Sunny",
        precipitation: "0%"
    },
    {
        city: "Chicago",
        temp: "43",
        condition: "Cloudy",
        precipitation: "20%"
    },
    {
        city: "New York",
        temp: "32",
        condition: "Snowy",
        precipitation: "100%"
    },
    {
        city: "Miami",
        temp: "79",
        condition: "Sunny",
        precipitation: "0%"
    }
]

app.get('/weatherapp/:city', (req, res) => {

    console.log(req.params)

    for (i = 0; i < weather.length; i++) {
        if (req.params.city == weather[i].city) {
            return res.send(weather[i])
        }
    }
})
//---

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})


app.listen(4000)
console.log("express is working on host 4000 ")