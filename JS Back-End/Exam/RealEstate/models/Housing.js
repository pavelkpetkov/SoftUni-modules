const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: [true, 'Name is required'], minLength: [6, 'Name has to be at least 6 characters long'] },
    type: { type: String, required: true },
    year: { type: Number, required: true, min: [1850, 'Year should be greater than 1850'], max: [2021, 'Year cannot be greater than 2021'] },
    city: { type: String, required: true, minLength: [4, 'City has to be at least 4 characters long'] },
    homeImage: { type: String, required: [true, 'Image is required'], match: [/^https?/, 'Image must be valid URL'] },
    description: { type: String, required: true, maxLength: [60, 'Description has to be less than 60 characters long'] },
    availablePieces: { type: Number, required: true, min: 0, max: [10, 'Maximum allowed pieces are 10'] },
    rentedAHome: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Housing', schema);