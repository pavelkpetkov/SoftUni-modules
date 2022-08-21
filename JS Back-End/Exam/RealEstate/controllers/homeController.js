const router = require('express').Router();

router.get('/', async (req, res) => {
    let housing = await req.storage.getAllHouses();
    housing = housing.slice(-3).reverse();
    res.render('home/home', { housing });
})

router.get('/404', (req, res) => {
    res.render('home/404');
})

module.exports = router;