require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 1234;

// on a creer un dossier app, dans lequel on creer un fichier router.js qu'on appelle
const router = require('./app/router');
app.use(router);

app.set('view engine', 'ejs');


// fichier views crer dans le dossier app express va utilier wies qui se trouve dans le dossier app
app.set('views', 'app/views');


// methode 'express dans le dossier public 
app.use(express.static('static'));



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});