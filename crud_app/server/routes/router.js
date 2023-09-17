const express = require('express');
const route = express.Router()


//all the rendering data is in services only...
const services = require('../services/render');

//logical part is in controller
const controller=require('../controller/controller');


/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)



//Api
// POST WORKING

//CREATE THE NEW USER
route.post('/api/users',controller.create);
//GET WORKING

//
route.get('/api/users',controller.find);
// PUT WORKING 
route.put('/api/users/:id',controller.update);
//DELETE NEED TO SAVE DATA
route.delete('/api/users/:id',controller.delete);


module.exports = route