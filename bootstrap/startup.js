/**
 *  This module is responsible for loading configuration
 *  and bootstrapping server dependencies
*/
const cors = require('../middleware/cors');
const bodyParser = require('body-parser');
/**
 * @param app ( Express )  
 */
module.exports =  (app) => {
    require('./mongo');
    app.use(bodyParser.json());
    app.use(cors);
    app.use('/api', require('../controllers/routes'));
}