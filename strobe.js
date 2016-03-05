var five = require("johnny-five"),
	    board = new five.Board();
var fetch = require('node-fetch');
var exec = require("child_process").exec;


board.on("ready", function() {
		  // Create an Led on pin 13
		  var led = new five.Led(13);

		    // Strobe the pin on/off, defaults to 100ms phases
		  function puts(error, stdout, stderr) {
			var end = Date.now() - start;
			console.log("ping: ", end/1000);
			led.strobe();
		  }
		  var start = Date.now();
		  exec("ping -c 3 google.com", puts); 
		  
		  /*fetch('https://github.com/')
			.then(function(res) {
			return res.text();
			}).then(function(body) {
			//led.strobe();
			console.log(body);
			}); 
		    
		  */
		  
		  });

