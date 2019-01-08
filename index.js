// ===================================================
// Googoo - Fake Google Home in UX reseach
// built by : Gideon Simons, 2018
// How it works: 
// The Web App where you can manage the 
// voice command scripts is all in the 
// public folder.
// You will need to connect to a Google Home 
// Device with bluetooth and then run this
// NodeJS app and go to the localhost link
// The web app will trigger the volume API 
// while is talks and make Google home LEDs flicker!
// ====================================================

//dependencies
var express = require('express');
var loudness = require('loudness');
var bodyParser = require('body-parser');
var http = require('http');

//vars
var app = express();
var port = process.env.PORT || 8888;

//express parsing support
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // to support URL-encoded bodies

///--- APIs Exposed ---///

//POST for changing computer volume
app.post('/googoo/vol', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    loudness.getVolume(function (err, vol) {
        if (vol % 2 == 0) {
            vol -= 3;
        } else {
            vol += 3;
        }
        loudness.setVolume(vol, function (err) {
            res.json("set volume to " + vol);
        });
    });

});

///--- Public web ui folder ---///
app.use("/", express.static(__dirname + "/public"));


///--- START THE SERVER ---///

app.listen(port);
console.log('Magic happens on port ' + port);