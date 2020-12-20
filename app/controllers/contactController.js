const contactController = {


    contactPage: (req, res) => {
        res.render('contact');
    },

    formSubmit: (req, res) => {
        res.render('index');
    }
};

module.exports = contactController;