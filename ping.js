var exec = require("child_process").exec

//stuff for pings
function puts(error, stdout, stderr) {
	var end = Date.now() - start;
	console.log("ping: ", end/1000);
}

var start = Date.now();
exec("ping -c 3 google.com", puts);

/*var url = 'https://www.google.com';

var start2 = Date.now();
request(url, function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		            console.log("downloaded Google"); // Show the HTML for the Modulus homepage.
			}
		});
var end2 = Date.now() - start2;
console.log("downloaded: ", (end2/1000));

//Close connection
connection.end(); */
