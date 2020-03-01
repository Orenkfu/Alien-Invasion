/**
 *  This module is responsible for loading configuration
 *  and bootstrapping server dependencies
*/
const cors = require('./middleware/cors');
/**
 * @param app ( Express )  
 */
module.exports =  (app) => {
    require('./mongo');
    app.use(cors)
    app.use('/api', require('./routes'));
}