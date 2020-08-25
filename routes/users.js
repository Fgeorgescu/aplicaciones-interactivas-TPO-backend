const userController = require('../controllers').users;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {

    //Create a new user
    app.post('/api/users', userController.create)

    //Get one user by ID (DNI)
    app.get('/api/users/:id', userController.getUserByDNI);

    //Get list of users
    app.get('/api/users', userController.list)
}