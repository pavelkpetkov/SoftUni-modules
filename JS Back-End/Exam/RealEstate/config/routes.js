const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const houseController = require('../controllers/houseController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/house', houseController);
}