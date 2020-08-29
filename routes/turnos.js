const turnosController = require('../controllers').turnos;

/**
 * Rutas para los servicios de los ususarios
 * @param {*} app 
 */
module.exports = (app) => {
    app.post('/api/turnos', turnosController.create)
    app.put('/api/turnos/:id', turnosController.update)
    app.get('/api/turnos/:id', turnosController.findById)
    app.get('/api/turnos', turnosController.find)
}