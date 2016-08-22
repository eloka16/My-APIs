var readline = require('readline'); 
var request = require ('request');
var int = readline.createInterface({
	input: process.stdin,
	output: process.stdout 
	})
	

	url = "https://api.medium.com/v1"

	int.question("what do you want to do :", (answer) => {
		//TODO: Log the answer in a database.
		console.log("Thank you for medium.", answer);
		
		
	var myacesstoken = "2d7261209c237322fd6a19ad21ba43a09f4bb40edba92c4d8084f39eb2cc525e8"
	
	var request = require('request');
	var myvar = "https://api.medium.com/v1/me"
	request.get({
		url: myvar,
		headers: {'Authorization': "Bearer 2d7261209c237322fd6a19ad21ba43a09f4bb40edba92c4d8084f39eb2cc525e8"}
		}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log(response.statusCode, body);
	    }
	});
	
		int.close();
		
	});
	
	
		
		