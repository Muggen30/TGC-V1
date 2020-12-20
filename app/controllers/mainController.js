const mainController = {


    homePage: (req, res) => {
        res.render('index');
    },

    activitiesPage: (req, res) => {
        res.render('activites');
    },

    clubPage: (req, res) => {
        res.render('tgcClub');
    }
};

module.exports = mainController;