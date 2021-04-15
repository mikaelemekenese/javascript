let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'ed55bfef462182bc9cc43c09d3cbab05';
let city = argv.c;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {

    if(err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `Il fait ${weather.main.temp}°C à ${weather.name}!`;
        console.log(message);
    }
});