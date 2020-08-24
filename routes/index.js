const userController = require('../controllers').users;

module.exports = (app) => {
    app.get("/api", (req, res) => res.status(200).send({
        message: "Estas en el router :D"
    }))

    //API Services Users
    app.get('/api/users/:id', userController.getUserByDNI);
}