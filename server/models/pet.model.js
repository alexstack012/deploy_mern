const mongoose = require('mongoose');
const PetShelterSchema = new mongoose.Schema({
    // name of the schema is a new mongoose schema
    name: {
        type: String,
        required: [
            true,
            "Name is Required"
        ],
        min:[3, "minimum name length must be 3 characters"]
        
    },
    type: {
        type: String,
        required: [
            true,
            "type is Required"
        ],
        min:[3, "minimum type length must be 3 characters"]},
    skill1: { type: String },
    skill2: { type: String },
    skill3: { type: String }
}, { timestamps: true });
// here is where you enter everything for the Collection. each pet has just a name that is a string and when it is created it is timestamped
module.exports.Pet = mongoose.model('PetShelter', PetShelterSchema);