const empleadosController = require('../controllers').empleados;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {

    //Create a new user
    app.post('/api/empleados', empleadosController.create)

    //Get one user by ID (DNI)
    app.get('/api/empleados/:id', empleadosController.findById);

    //Get list of users
    app.get('/api/empleados', empleadosController.list)
}