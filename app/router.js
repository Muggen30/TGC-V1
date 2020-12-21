// On utiliser express donc on le require
const express = require('express');
// On va créer notre constante router qui utilise la méthode router de express
const router = express.Router();

// on va utiliser le mainController qu'on a créé
const mainController = require('./controllers/mainController');
const contactController = require('./controllers/contactController');

router.get('/favicon.ico', () => {})
router.get('/', mainController.homePage);
router.get('/activites', mainController.activitiesPage);
router.get('/club', mainController.clubPage);
router.get('/contact', contactController.contactPage);
router.post('/contact', contactController.sendMail);


module.exports = router;