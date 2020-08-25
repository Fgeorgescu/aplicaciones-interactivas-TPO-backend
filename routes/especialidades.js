const especialidadesController = require('../controllers').especialidades;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {

    //Create a new user
    app.post('/api/especialidades', especialidadesController.create)

    //Get one user by ID (DNI)
    app.get('/api/especialidades/:id', especialidadesController.findById);

    //Get list of users
    app.get('/api/especialidades', especialidadesController.list)
}