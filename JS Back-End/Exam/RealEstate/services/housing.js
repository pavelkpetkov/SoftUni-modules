const Housing = require('../models/Housing');

async function createHouse(houseData) {
    //TODO Adapt properties to project requirements
    const house = new Housing(houseData)
    await house.save();
    return house;
}

async function getAllHouses() {

    // const houses = await Housing.find({}).sort({freeRooms: 'desc'}).lean();
    const houses = await Housing.find({}).lean();

    return houses;
}

async function getHouseById(id) {
    const house = await Housing.findById(id).lean();
    return house;
}

async function deleteHouse(id) {
    return Housing.findByIdAndDelete(id);
}


async function editHouse(id, houseData) {
    const house = await Housing.findById(id);

    house.name = houseData.name.trim();
    house.type = houseData.type.trim();
    house.year = houseData.year;
    house.city = houseData.city.trim();
    house.homeImage = houseData.homeImage.trim();
    house.description = houseData.description.trim();
    house.availablePieces = houseData.availablePieces;

    return house.save();
}

async function joinHouse(houseId, userId) {
    const house = await Housing.findById(houseId);

    house.rentedAHome.push(userId);
    house.availablePieces --;
    return house.save();
}

async function getSearched(search) {
    const pattern = new RegExp(`${search}`, 'i');
    let sort = { createdAt: -1 };
    return Housing.find({ type: { $regex: pattern }}).sort(sort).lean();
}


module.exports = {
    createHouse,
    getAllHouses,
    getHouseById,
    deleteHouse,
    editHouse,
    joinHouse,
    getSearched
}
