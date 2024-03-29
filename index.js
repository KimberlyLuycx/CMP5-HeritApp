const express = require('express');
const app = express();
const port =  (process.env.PORT || 5000 );
const path = require("path");
var request = require('request');

// applicatie: zet instellings 'views' op 'mapje views'
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(express.static('public'));

const databanktwee = require('./data/databanktwee.json');

/* console.log("Webserver draait"); */

let alleInfo = new Array();

var features;
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek4/MapServer/293/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  function(error, response, body){
    features = JSON.parse(body);
    features = features.features;

    console.log("features geladen");
    for( var i=0; i < features.length; i++) {
      alleInfo[i] = {
          attr: features[i].attributes
      };
      for (var j = 0; j < databanktwee.databankTwee.length; j++) {
        if (features[i].attributes.naam == databanktwee.databankTwee[j].titel) {
          alleInfo[i].info = databanktwee.databankTwee[j];
        }
      }
    }

    /*for (var x=0;x<alleInfo.length;x++){
        console.log(alleInfo[x].info);
    }*/


    /*for(var i=0; i < features.length; i++) {
    }*/

  }
);

app.get('/', function (req, res) {
  res.render('index');
});

// wat achter de slash staat is url die je ingeeft in browse
app.get('/kaart', function (req, res) {
  res.render('kaart', {
    geometrie: features,
    alleInfo: alleInfo
  });
});

app.get('/overzicht', function (req, res) {
  res.render('overzicht', {
    alleInfo: alleInfo
  });
});

app.get('/contact', function (req, res) {
  res.render('contact');
});


app.get('/overzicht/:id', function(req,res){

  res.render('detail', {
    alleInfo: alleInfo[req.params.id],
    geometriedetails: features[req.params.id]
  });
});


app.listen(port);
