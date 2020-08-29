const usersController = require('../controllers').users;
const historiasController = require('../controllers').historias;
const medicamentosController = require('../controllers').medicamentos;
const consultasController = require('../controllers').consultas;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {

    //Create a new user
    app.post('/api/users', usersController.create)

    //Login
    app.post('/api/users/login', usersController.loginEmpleado)

    //Get one user by ID (DNI)
    app.get('/api/users/:id', usersController.findById);

    //Get list of users
    app.get('/api/users', usersController.list)


    //Historia clínica
    //crear
    app.post('/api/users/:id/history', historiasController.create)

    //Get one user by ID (DNI)
    app.get('/api/users/:id/history', historiasController.findById);

    //Get list of users
    app.put('/api/users/:id/history', historiasController.update)

    //Medicamentos
    //crear
    app.post('/api/users/:id/medicamentos', medicamentosController.add)

    //Get one user by ID (DNI)
    app.get('/api/users/:id/medicamentos', medicamentosController.findAll);

    //Get list of users
    app.put('/api/users/:id/medicamentos', medicamentosController.update)

    //Consultas
    //crear
    app.post('/api/users/:id/consultas', consultasController.add)

    //Get one user by ID (DNI)
    app.get('/api/users/:id/consultas', consultasController.findAll);    
}