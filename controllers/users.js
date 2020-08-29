const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const users = require('../models').users;

const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports = {

    /**
     * Creamos un nuevo empleado
     */
    create(req, res) {
        console.log(req.body)
        const pwd = req.body.password ? req.body.password : "123456";
        var hashedPassword = bcrypt.hashSync(pwd, 8);

        return users
            .create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                username: req.body.username,
                dni: req.body.dni,
                fecha_nacimiento: new Date(req.body.fecha_nacimiento),
                telefono: req.body.telefono,
                mail: req.body.mail ? req.body.mail : `${req.body.username}@rumano.com`,
                password: hashedPassword,
                rol: req.body.rol ? req.body.rol : "paciente",
                matricula: req.body.matricula,
                especialidad: req.body.especialidad,
            })
            .then(users => {
                var token = jwt.sign({
                    id: users.id
                }, process.env.SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(201).send({
                    token: token,
                    username: users.username,
                    role: users.rol
                })
            })
            .catch(error => {
                console.log("error")
                console.log(error)
                res.status(400).send(error)
            })
    },

    /**
     * Update a un user
     */
    update(req, res) {
        return users
            .findOne({
                where: 
                    req.params
            })
            .then(users => {
                if (users) {
                    users.dataValues = {...users.dataValues, ...req.body}
                    console.log(users)
                    users.save()
                    res.status(200).send(users)
                }  else {
                    res.status(404).send({messge: `No se encontro registro del ususario`})
                }
            })
            .catch(error => {
                console.log(error)
                res.status(400).send(error)
            })
    },

    /**
     * Listamos a los users
     */
    list(req, res) {
        return users
            .findAll({
                where: req.query
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por rol
     */
    findById(req, res) {
        console.log(req.params)
        return users
            .findOne({
                where: 
                    req.params
            })
            .then(users => users ? res.status(200).send(users) : res.status(404).send({messge: `No se encontro registro del ususario`}))
            .catch(error => res.status(400).send(error))
    },

    loginEmpleado(req, res) {
        console.log("Entramos")

        // Req.Body contains the form submit values.
        var empleadologinInfo = {
            username: req.body.username,
            password: req.body.password
        }
        
        var loginEmpleado;
        // Calling the Service function with the new object from the Request Body
        // Find the User
        users.findOne({
            where: {
                username: empleadologinInfo.username
            }
        }).then(empleadoDetails => {
            var passwordIsValid = bcrypt.compareSync(empleadologinInfo.password, empleadoDetails.password);
            if (!passwordIsValid) return res.status(400).json({ status: 400, message: "Invalid username or password" })

            var token = jwt.sign({
                id: empleadoDetails.id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            loginEmpleado = token;
            return res.status(201).json({
                token: loginEmpleado,
                username: empleadoDetails.username,
                role: empleadoDetails.rol,
                message: "Succesfully login"
            })

        }).catch(error => res.status(401).send(error))
    }
}