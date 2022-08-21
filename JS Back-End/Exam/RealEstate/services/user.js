const User = require('../models/User');

async function createUser(name, username, hashedPassword) {
    //TODO Adapt properties to project requirements
    const user = new User({
        name,
        username,
        hashedPassword
    })
    await user.save();
    return user;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern } }).lean();
    return user;
}


async function getUserById(id) {
    const user = await User.findById(id).lean();
    return user;
}
//TODO add functions for finding users by other properties, as specified in the project requirements

module.exports = {
    createUser,
    getUserByUsername,
    getUserById
}