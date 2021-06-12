"use strict";

// required modules
var os = require('os');
var express = require('express');
var async = require('async');
var bodyParser = require('body-parser');
var path = require('path');
const NodeGeocoder = require('node-geocoder');
var inPolygon = require('./utilities/pointInPolygon.js')
var kmlParse = require('./utilities/kmlParser')


const options = {
    provider: 'mapquest',
    apiKey: ' LHCmpwT0xXWc4Yn7OkLwbYoRqBCCLAlO', // for Mapquest key
    formatter: null 
};
//Using geocoder with Mapquest for fetching Lat, long from address.
const geocoder = NodeGeocoder(options);

// new express app
var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());




//POST endpoint to fetch outlets
app.post('/fetch-outlet', async function (req, res) {
    try {
        //POST Parameter `address`
        var address = req.body.address

        const resp = await geocoder.geocode(address);
        const { latitude, longitude } = resp[0]

        if (!latitude || !longitude) {
            res.send("Location not found my geolocation service")
        }

        kmlParse().then(data => {
            const getPolygon = data.features.map(loc => ({
                polygon: loc.geometry.coordinates[0],
                address: loc.properties.name
            }))
            let selectedAddress = 'Not Found'
            let found = false
            getPolygon.forEach(element => {
                const IsAddressInPolygon = inPolygon([longitude, latitude], element.polygon)
                if (IsAddressInPolygon) {
                    found = IsAddressInPolygon
                    selectedAddress = element.address
                }
            });
            // const IsAddressInPolygon = getPolygon.some((loc) => {
            //     selectedAddress = loc.address
            //     return inPolygon([longitude, latitude], loc.polygon)
            // });
            console.log(longitude,latitude)
            console.log(selectedAddress)
            res.send(`${found ? selectedAddress : 'Not found'}`);
        })
    } catch (e) {
        res.send(JSON.stringify(e))
    }
});
/*

*/


// app listen
app.listen(8080, function () {
    var netList = os.networkInterfaces();
    var ips = [];


    console.log('App listening on hostname "' + os.hostname() + ' port 8080');
});