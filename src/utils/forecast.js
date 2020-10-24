const request = require('postman-request');

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=13923ef274e0506bd420813474bb6985&query='+ longitude + ',' + latitude + '&units=f'
    request({url, json: true}, (error, { body }= {})=>{
        if(error){
            console.log('Unable to connect to weather services!',undefined)

        } else if(body.error){
            console.log('Unable to find location',undefined)

        } else{
            console.log(body.current)
            callback(undefined,body.current.weather_descriptions[0]+ '. It is currently '+ body.current.temperature +' degrees out. It feels like '+body.current.feelslike+' degrees out. The humidity is '+ body.current.humidity+' %')
        }
    })

}

module.exports = forecast