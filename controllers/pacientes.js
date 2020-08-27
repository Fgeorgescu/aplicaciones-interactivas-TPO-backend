const Sequelize = require('sequelize');

const pacientes = require('../models').pacientes;

const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports = {

    /**
     * Creamos un nuevo paciente
     */
    create(req, res) {
        console.log(`promise`)
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);

        return pacientes
            .create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                username: req.body.username,
                dni: req.body.dni,
                fecha_nacimiento: req.body.fecha_nacimiento,
                telefono: req.body.telefono,
                mail: req.body.mail ? req.body.mail : `${req.body.username}@rumano.com`,
                password: hashedPassword,
            })
            .then(pacientes => {
                var token = jwt.sign({
                    id: pacientes.id
                }, process.env.SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(201).send({
                    token: token,
                    username: pacientes.username,
                    role: "paciente"
                })
            })
            .catch(error => {
                console.log("error")
                console.log(error)
                res.status(400).send(error)
            })
    },

    /**
     * Listamos a los pacientes
     */
    list(_, res) {
        return pacientes
            .findAll({
            })
            .then(pacientes => res.status(200).send(pacientes))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Buscar por rol
     */
    findById(req, res) {
        return pacientes
            .findAll({
                where: {
                    username: req.params.id
                }
            })
            .then(pacientes => res.status(200).send(pacientes))
            .catch(error => res.status(400).send(error))
    },

    loginPaciente(req, res) {
        // Req.Body contains the form submit values.
        console.log("Paciente login")

        var pacienteloginInfo = {
            username: req.body.username,
            password: req.body.password
        }
        var loginEmpleado;
        // Calling the Service function with the new object from the Request Body
        // Find the User 
        pacientes.findOne({
            where: {
                username: pacienteloginInfo.username
            }
        }).then(pacienteDetails => {
            console.log("Encontramos el usuario para el login")
            console.log(pacienteDetails)
            var passwordIsValid = bcrypt.compareSync(pacienteloginInfo.password, pacienteDetails.password);
            if (!passwordIsValid) return res.status(400).json({ status: 400, message: "Invalid username or password" })

            var token = jwt.sign({
                id: pacienteDetails.id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            loginEmpleado = token;
            return res.status(201).json({
                token: loginEmpleado,
                username: pacienteDetails.username,
                role: "paciente",
                message: "Succesfully login"
            })

        }).catch(error => res.stauts(401).send(error))
    }
}