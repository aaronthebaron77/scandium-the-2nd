const Discord = require("discord.js"); 
const https = require('https');

module.exports.name = "talk";

module.exports.run = async (bot,message,args) => {  
    var postData = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "max_tokens": 100,
      "messages": [
          {
              "role": "system",
              "content": "You are an helpful assistant."
          },
          {
              "role": "user",
              "content": "Who are you?"
          }
      ]
    });
    
    const options = {
		host: 'api.pawan.krd',
		path: '/pai-001-light-beta/v1',
		headers: {
			"Content-Type": 'application/json',
			Authorization: 'Bearer pk-RntcqFvvxYKasPLoSbAkgogyfwMXKgmNDLxcPdrzEVcwtWCJ'
		}
	};
    
    var req = https.request(options, (res) => {
	var data = "";
	
	// this event fires many times, each time collecting another piece of the response
	res.on("data", function (chunk) {
		// append this chunk to our growing `data` var
		data += chunk;
	});
	
	// this event fires *one* time, after all the `data` events/chunks have been gathered
	res.on("end", function () {
		// you can use res.send instead of console.log to output via express
		console.log(data);
	});
    });
    
    req.on('error', (e) => {
      console.error(e);
    });
    
    req.write(postData);
    req.end();
}

module.exports.help = {

    name:"talk",
    desc: "head",
    personalThoughts: "pat"

}