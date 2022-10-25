document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    var key = '2fd1b33f25581bd3bc35eecc5048f3ff';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp){
        return resp.json()
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {

        });
}

function cityWeather(e) {
    weatherDataFetch('Tallinn')
}