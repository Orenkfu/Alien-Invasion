const config = require('../config');
const mongoose = require('mongoose');

const { Alien } = require('../models/alien');
/**
 * This module is responsible for communicating with the database layer.
 * In a larger project, it would be spread to various modules with delegated responsibilities.
 * Due to a limited CRUD interface, a single file will suffice.
 */

 module.exports.createAlien = (alien_template) => {
     return Alien.create(alien_template);
 } 

 module.exports.findAliensByType = (type) => {
     return Alien.find({
         type: type
     })
 }
/*Alien.create({
    name: "stam",
    type: "Chief Commander",
  //  parent: null,
    membership_card: 'Shufersal'
}).then(() => {

    
    Alien.find().then(res => {
        console.log(res);
    })
})
*/