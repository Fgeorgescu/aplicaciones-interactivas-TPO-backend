const empleadosController = require('../controllers').empleados;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {

    //Create a new user
    app.post('/api/empleados', empleadosController.create)

    //login
    app.post('/api/empleados/login', empleadosController.loginEmpleado)

    //Get one user by ID (DNI)
    app.get('/api/empleados/:id', empleadosController.findById);

    //Get list of users
    app.get('/api/empleados', empleadosController.list)
}