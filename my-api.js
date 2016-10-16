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
	
	request({
	    url: 'https://api.medium.com/v1/users/{{1b55ff57a2f0ea9780657f5da3ffd656c33480f4206c6a978846ae9c6a87ae7f6}}/posts', //URL to hit
	    method: 'POST',
	    headers: {
	         'Authorization': 'Bearer 2e5cdee128202fa37fd4f37ba3308a3ff277ac5d4ceb256df2e151b20a14f3278'
	    },
	    body: {"title": "Trying out Medium's API",
		"contentFormat": "HTML",
		"contentFormat": "<p><h1> Medium API, to be deleted after </h1></p>",
		"tags": ["api"],
    	"publishStatus": "unlisted"},
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log(response.statusCode, body);
	    }
	});
  console.log('Thank you for your valuable feedback:', answer);
}
  rl.close();
});
	
		
		int.close();
		
	});
	
	
		
		