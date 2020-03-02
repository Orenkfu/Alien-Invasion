const db = require('../db/mongo-dal');
module.exports.getAliens = async () => {
    let aliens = await db.getAllAliens()
    aliens.reduce((map, current) => {
        if (!map[current.type]) {
            map[current.type] = [];
        }
        map[current.type].push(current);
        return map;
    }, {});
}