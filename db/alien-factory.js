
const enums = require('../models/enums');
const uid = require('uuid');
const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
const name_pool = [
    "Sverg", "Blorzgh", "Mufasa", "Jax", "Arx", "Poreazfi", "Jubkin", "Merrack", "Mograbi", "Malqweip", "Porxi", "Nevela", "Holera"
]

module.exports.createRandomAlien = () => {
    return {

    }
};
module.exports.createRandomAlienCommander = () => {

}
module.exports.createRandomAlienWarrior = () => {
    return {
        name: random(name_pool),
        id: uid.v4(),
        weapon: random(Object.values(enums.Weapon))
    }
}
module.exports.createRandomAlienChief = () => {
    return {
        
    }
}