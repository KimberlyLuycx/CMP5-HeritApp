const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

// applicatie: zet instellings 'views' op 'mapje views'
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

// wat achter de slash staat is url die je ingeeft in browse
app.get('/tweede', function (req, res) {
  res.render('page2');
});

app.get('/derde', function (req, res) {
  res.render('page3');
});

app.listen(port);
