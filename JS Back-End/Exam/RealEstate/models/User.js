const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, match: [/^[A-Z][a-z]* [A-Z][a-z]*/, 'Name must be valid name'] },
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true }
});

module.exports = model('User', schema);