const rolesController = require('../controllers').roles;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {

    //Create a new user
    app.post('/api/roles', rolesController.create)

    //Get one user by ID (DNI)
    app.get('/api/roles/:id', rolesController.findById);

    //Get list of users
    app.get('/api/roles', rolesController.list)
}