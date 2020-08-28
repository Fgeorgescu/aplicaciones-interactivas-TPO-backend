/**
 * This routes all the diferent routes
 * @param {Application} app 
 */
module.exports = (app) => {
    require('./users')(app);
    require('./especialidades')(app);
    require('./roles')(app);
    require('./turnos')(app);
}