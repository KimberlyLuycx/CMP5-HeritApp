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
app.get('/kaart', function (req, res) {
  res.render('pkaart');
});

app.get('/overzicht', function (req, res) {
  res.render('overzicht');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/account', function (req, res) {
  res.render('account');
});

app.listen(port);
