/**
 * This module is responsible for communicating with the database layer.
 * In a larger project, it would be spread to various modules with delegated responsibilities.
 * Due to a limited CRUD interface, a single file will suffice.
 */
const { Alien } = require('../models/alien');

module.exports.createAlien = (alien_template) => {
    console.log(alien_template);
    return Alien.create(alien_template)
        .then(result => {
            console.log(result);
        })
        .catch(e => {
            console.error(e);
        });
}

module.exports.getByParent = (parent_id) => {
    return Alien.find({
        parent: parent_id
    })
}
module.exports.getById = (id) => {
    return Alien.findById(id);
}

module.exports.getAllAliens = () => {
    return Alien.find();
}

module.exports.findAliensByType = (type) => {
    return Alien.find({
        type: type
    })
}