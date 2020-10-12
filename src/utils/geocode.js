const request = require('postman-request');

const geoCode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaW1qYXllc2hyIiwiYSI6ImNrZXlpd2NrZzA5YmczM3B1OGJyaGVvNHYifQ.YnoXe6Nnd4Jz1xm2tKcGJA&limit=1'
 
    request({url, json: true}, (error, {body}={})=>{
       if(error){
          callback('Unable to connect to location services!',undefined)
          //console.log(error)
       } else if(body.features.length===0){
          callback('Unable to find  location. Try another search! ',undefined)
          //console.log(body.features)
          //console.log(response)
       } else{
          callback(undefined, {
             latitude: body.features[0].center[0],
             longitude: body.features[0].center[1],
             location: body.features[0].place_name
          })
       }
 
    })
 }

 module.exports = geoCode