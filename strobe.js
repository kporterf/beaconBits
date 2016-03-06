var five = require("johnny-five"),
	    board = new five.Board();
var fetch = require('node-fetch');
var exec = require("child_process").exec;
var request = require("request");

//board informatin
var serial = "1234";
var details = "1st floor, atrium";
var gps = "29.0358, -81.2999";
var channel = "a";
var ip = "1234";
var mac = "1234";
var signalStrength = "89";
var visibleNetworks = null;
var ping = null;
var up = null;
var down = null;

board.on("ready", function() {
	// Create an Led on pin 13
	//var led = new five.Led(13);
	
	//push to database
	function pushData() {
		request.post("http://52.91.76.141/api/beacons", function optionalCallback(err, httpResponse, body) {
  			if (err) {
    				return console.error('upload failed:', err);
  			}
  			console.log('Upload successful!  Server responded with:', body);
		}).form({"serial":serial, "details":details, "gps":gps, "channel":channel, "ip":ip, "mac":mac, "signal_strength":signalStrength, "visible_networks":visibleNetworks, "ping":ping, "up":up, "down":down});
	}

	function download() {
		var start2 = Date.now();
		var url = "https://www.google.com";
		request(url, function (error, response, body) {
                    	if (!error && response.statusCode == 200) {
                            console.log("downloaded Google"); // Show the HTML for the Modulus homepage.
			    down = Date.now() - start2;
			    pushData();
                        }
                });
	}	

	// Strobe the pin on/off, defaults to 100ms phases
	function puts(error, stdout, stderr) {
		ping = Date.now() - start;
		ping = ping/1000;
		console.log("ping: ", ping);
		//led.strobe();
		download();
	}
	
	var start = Date.now();
	exec("ping -c 3 google.com", puts); 

	/*fetch('https://github.com/').then(function(res) {
		return res.text();
		}).then(function(body) {
		//led.strobe();
		console.log(body);
	});*/
});

