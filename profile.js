//Problem: We need a simple way to look at user's badge count and JavaScript points
//Solution: Use Node.js to connect to TreeHouse api to get information.

var https = require('https');
var http = require('http');
var printer = require('./printer.js');

function get(userName){
  //connect to the api url (http://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/"+userName+".json", function(response){
  var body = "";
  response.on('data',function(chunk){
    body += chunk;
  });
  response.on('end',function(){
    if(response.statusCode === 200){
      try{
        var jsonObject = JSON.parse(body);
        printer.printMessage(userName, jsonObject.badges.length,jsonObject.points.JavaScript);
      } catch (error){
        //Parse error
        printer.printError(error);
      }
    }else{
      //Status code error
      printer.printError({message: "There was a problem getting the profile for " + userName +" . ( "
     +http.STATUS_CODES[response.statusCode]+ " )"});
    }
    
    
  });
  //read the data 
  //parse the data
  //print the data
});

//Connection error
request.on("error", printer.printMessage);

}

module.exports.get = get;

