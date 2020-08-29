const moment = require('moment')
const Sequelide = require('sequelize');
const { response } = require('express');
const turnos = require('../models').turnos

module.exports = {

    /**
     * Creamos turnos. día 0 es domingo, día 6 es sábado
     */
    create(req, res) {
        var iterableDate = moment()
        var turnosGenerados = []
        //Iteramos n semanas. 1 semana es para completar esta.
        for(var i=0; i < req.body.semanas;){
            if(req.body.dias.includes(iterableDate.day())){
                var inicio = iterableDate.clone()
                inicio.hour(9)
                inicio.minutes(0)

                var final = iterableDate.clone()
                final.hour(18)
                final.minutes(0)

                while ( inicio.isBefore(final)) {

                    console.log(moment().format('DD MM YYYY hh:mm'));
                    
                    turnosGenerados.push({
                        doctor: req.body.doctor_username,
                        fecha: inicio.format("DD MM YYYY"),
                        hora: inicio.format("h:mm"),
                        duracion: req.body.duracion,
                        paciente: null
                    })
                    inicio.add(req.body.duracion, 'm') //avanzamos la duración de un turno
                }
            } 
            iterableDate.add(1, 'd') //día siguiente    
            if(iterableDate.day() === 0) i++ //0 es domingo, completamos una semana
        }
        console.log("turnosGenerados")
        console.log(turnosGenerados)

        return turnos.bulkCreate(
            turnosGenerados, 
            { individualHooks: true }
        ).then((values) => res.status(201).send({message: "created"}))
        .catch(error => {
            console.log(error)
            res.status(400).send({error: error})})
    },

    update(req, res) {
        return turnos.findOne({
            where: {
                id: req.params.id
            }
        }).then(turno => {
            turno.paciente=req.body.paciente;
            turno.save()
            res.status(200).json({message:"turno guardado"})
        })
    },

    find(req, res) {
        return turnos
            .findAll({
                where: req.query
            })
            .then(turnos => res.status(200).send(turnos))
            .catch(error => res.status(400).send(error))

    },

    findById(req, res) {
        return turnos
            .findAll({
                where: {
                    id: req.params.id
                }           
            })
            .then(turnos => res.status(200).send(turnos))
            .catch(error => res.status(400).send(error))

    }
}