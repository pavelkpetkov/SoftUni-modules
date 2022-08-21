const router = require('express').Router();
const { isUser, isGuest } = require('../middlewares/guards');
const { getUserById } = require('../services/user');
const { parseError } = require('../util/parser');


router.get('/create', isUser(), (req, res) => {
    res.render('housing/create');
})

router.post('/create', isUser(), async (req, res) => {

    const houseData = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),
        city: req.body.city,
        homeImage: req.body.homeImage,
        description: req.body.description,
        availablePieces: req.body.availablePieces,
        owner: req.user._id,
    }

    try {

        await req.storage.createHouse(houseData);

        res.redirect('/house/rent');
    } catch (err) {
        console.log(err.message);
        const ctx = {
            errors: parseError(err),
            houseData: {
                name: req.body.name,
                type: req.body.type,
                year: Number(req.body.year),
                city: req.body.city,
                homeImage: req.body.homeImage,
                description: req.body.description,
                availablePieces: req.body.availablePieces,
                owner: req.user._id,
            }
        }
        res.render('housing/create', ctx);
    }
})

router.get('/rent', async (req, res) => {
    const housing = await req.storage.getAllHouses();

    res.render('housing/recent', { housing });
})

router.get('/details/:id', async (req, res) => {
    try {
        const house = await req.storage.getHouseById(req.params.id);

        house.hasUser = Boolean(req.user);
        if (req.user) {
            house.isOwner = req.user && req.user._id == house.owner;
            house.hasJoined = false;
            if (house.rentedAHome.length > 0) {
                let people = [];
                for (const userId of house.rentedAHome) {
                    if (userId == req.user._id) {
                        house.hasJoined = true;
                    }
                    let user = await getUserById(userId);
                    people.push(user.name);
                }
                house.peopleIn = people.join(', ');
                house.rented = true;
            } else {
                house.rented = false;
            }
            // house.rented = req.user && hotel.usersBookedARoom.find(u => u._id == req.user._id);
            if (house.availablePieces > 0) {
                house.hasFree = true;
            } else {
                house.hasFree = false;
            }
        }

        res.render('housing/details', { house });
    } catch (err) {
        console.log(err.message);
        res.redirect('/home/404');
    }
})


router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const house = await req.storage.getHouseById(req.params.id);

        if (house.owner != req.user._id) {
            throw new Error('Cannot delete house you haven\'t created');
        }

        await req.storage.deleteHouse(req.params.id);

        res.redirect('/house/rent');
    } catch (err) {
        console.log(err.message);
        res.redirect('/home/404');
    }
})

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const house = await req.storage.getHouseById(req.params.id);

        if (house.owner != req.user._id) {
            throw new Error('Cannot edit house you haven\'t created');
        }

        res.render('housing/edit', { house });
    } catch (err) {
        console.log(err.message);
        res.redirect('/house/details/' + req.params.id);
    }
})

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const house = await req.storage.getHouseById(req.params.id);

        if (house.owner != req.user._id) {
            throw new Error('Cannot edit house you haven\'t created');
        }

        await req.storage.editHouse(req.params.id, req.body);

        res.redirect('/house/details/' + req.params.id);
    } catch (err) {
        console.log(err.message);
        res.redirect('/house/details/' + req.params.id);
    }
})

router.get('/join/:id', isUser(), async (req, res) => {
    try {
        const house = await req.storage.getHouseById(req.params.id);

        await req.storage.joinHouse(req.params.id, req.user._id);

        res.redirect('/house/details/' + req.params.id);
    } catch (err) {
        console.log(err.message);
        res.redirect('/home/404');
    }
})

router.get('/search', (req, res) => {

    res.render('home/search');

})

router.post('/search', async (req, res) => {
    try {
        console.log(req.body.search);
        const housesSearched = await req.storage.getSearched(req.body.search);
        res.render('home/searchedTemp', { housesSearched });
        // res.redirect('/course/details/' + req.params.id);
    } catch (err) {
        console.log(err.message);
        res.redirect('/home/404');
    }
})

module.exports = router;
