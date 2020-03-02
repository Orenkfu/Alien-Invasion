/**
 *  This module is responsible for loading configuration
 *  and bootstrapping server dependencies
*/
const cors = require('../Alien-Invasion/middleware/cors');
/**
 * @param app ( Express )  
 */
module.exports =  (app) => {
    require('../Alien-Invasion/mongo');
    app.use(cors)
    app.use('/api', require('../Alien-Invasion/routes'));
}