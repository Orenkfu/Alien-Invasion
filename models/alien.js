const mongoose = require('mongoose');

const Alien = mongoose.model('Aliens', new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 55,
        trim: true
    },
    type:
    {
        type: String,
        enum: ['Commander', 'Warrior', 'Chief Commander'],
        required: true,
        trim: true,
    },
    weapon:
    {
        type: String,
        enum: ['Water gun', 'Pepper spray', 'Chopsticks'],
        required: function () {
            return this.type === 'Warrior'
        }
    },
    vehicle: 
    {
        type: String,
        enum: ['Bird scooter', 'Merkava tank'],
        required: function () {
            return this.type != "Warrior"
        } 
    },
    membership_card: 
    {
        type: String,
        enum: ['Hitech zone', 'Hever', 'Shufersal'],
        required: function () {
            return this.type === 'Commander'
        }
    },
    parent: 
    {
        type: mongoose.Schema.ObjectId,
        /*required: function () {
            return this.type !== 'Chief Commander'
        }*/
    }
}));


exports.Alien = Alien;