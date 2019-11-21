const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
var request = require('request');


// applicatie: zet instellings 'views' op 'mapje views'
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(express.static('public'));

console.log("Webserver draait");

var features;
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek4/MapServer/293/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  function(error, response, body){
    features = JSON.parse(body);
    features = features.features;
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
    information: features
  });
});

app.get('/overzicht', function (req, res) {
  res.render('overzicht', {
    information: features
  });
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/account', function (req, res) {
  res.render('account');
});

app.get('/overzicht/:id', function(req,res){
  res.render('detail', {
    information: features,
    details: features[req.params.id]
  });
});


app.listen(port);
