const mongoose = require('mongoose');

const types = [ 'Commander', 'Warrior', 'Chief Commander' ];
const vehicles = ['Bird scooter', 'Merkava tank'];
const weapons = [ 'Water gun', 'Pepper spray', 'Chopsticks' ];
const cards = [ 'Hitech zone', 'Hever', 'Shufersal' ];

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
        enum: types,
        required: true,
        trim: true,
    },
    weapon:
    {
        type: String,
        enum: weapons,
        required: function () {
            return this.type === 'Warrior'
        }
    },
    vehicle: 
    {
        type: String,
        enum: vehicles,
        required: function () {
            return this.type != "Warrior"
        } 
    },
    membership_card: 
    {
        type: String,
        enum: cards,
        required: function () {
            return this.type === 'Commander Chief'
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

exports.vehicles = vehicles;
exports.cards = cards;
exports.weapons = weapons;
exports.types = types;
exports.Alien = Alien;