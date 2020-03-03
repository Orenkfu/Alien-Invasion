const db = require('../db/mongo-dal');
//helper method to expose aliens grouped by type - The o(n) efficiency is sub-optimal for large amounts of data,
// considering we're grabbing the entire table, but convenient for consumption for smaller sets.
module.exports.getAliensHashmap = async () => {
    let aliens = await db.getAllAliens()
    return aliens.reduce((map, current) => {
        if (!map[current.type]) {
            map[current.type] = [];
        }
        map[current.type].push(current);
        return map;
    }, {});
}

//these methods are redundant as is, but kept for layering application logic - when this application expands they will inevitable expand as well
module.exports.getAliensByType = (type) => {
    return db.getAliensByType(type);
}
module.exports.getAlienById = (id) => {
    return db.getById(id);
}
module.exports.getByParent = (parent_id) => {
    return db.getByParent(parent_id);
}
module.exports.createAlien = (alien_candidate) => {

    //TODO: validate received alien object before delegating creation to DAL
    console.log("creating alien: " + alien_candidate);
    return db.createAlien(alien_candidate);
}