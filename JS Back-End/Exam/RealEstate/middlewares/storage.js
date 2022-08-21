const house = require('../services/housing');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...house
    };

    next();
}