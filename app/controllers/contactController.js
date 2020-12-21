/*const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(transport[defaults]);*/

const contactController = {


    contactPage: (req, res) => {
        res.render('contact');
    },

    sendMail: (req, res) => {
        const message = req.body
        console.log(message);
        res.redirect('/');
    }
};

module.exports = contactController;