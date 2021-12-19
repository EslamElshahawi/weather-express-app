const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ec0f7b3cc2609c29af79a2a02ed33927&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const msg = `${body.current.weather_descriptions[0]}. It's ${body.current.temperature} out. It feels like ${body.current.feelslike}. The humidity is ${body.current.humidity}%.`
            callback(undefined, msg)
        }
    })
}

module.exports = forecast;