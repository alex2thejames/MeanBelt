const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, min: 3, required: true, unique: true },
    type: { type: String, min: 3, required: true, unique: false },
    description: { type: String, min: 3, required: true, unique: false },
    skill1: { type: String, required: false, default: '', unique: false },
    skill2: { type: String, required: false, default: '', unique: false },
    skill3: { type: String, required: false, default: '', unique: false },
    likes: { type: Number, required: false, default: 0, unique: false}
}, { timestamps: true });

const Pet = mongoose.model('pet', PetSchema);

var uniqueValidator = require('mongoose-unique-validator');

module.exports = Pet;