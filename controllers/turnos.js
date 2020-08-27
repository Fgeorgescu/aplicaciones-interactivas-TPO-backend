const moment = require('moment')

module.exports = {

    /**
     * Creamos turnos. día 0 es domingo, día 6 es sábado
     */
    create(req, res) {
        console.log(req.body)
        var iterableDate = moment()
        for(var i=0; i < req.body.semanas;){

            
            if(req.body.dias.includes(iterableDate.day())){
                console.log(`asignamos los turnos del día: ${iterableDate.format("MMM Do YY")}`)
                var inicio = iterableDate.clone()
                inicio.hour(9)
                inicio.minutes(0)

                var final = iterableDate.clone()
                final.hour(18)
                final.minutes(0)

                while ( inicio.isBefore(final)) {
                    console.log(`Creamos un turnoel día y hora: ${inicio.format("MMMM Do YYYY, h:mm:ss a")}`)

                    console.log(moment().format('"DD MM YYYY hh:mm'));

                    inicio.add(req.body.duracion, 'm')
                }
            } 
            iterableDate.add(1, 'd') //día siguiente    
            if(iterableDate.day() === 6) i++ //competamos una semana
        }
        res.status(201).send({message: "created"})
    },

    update(req, res) {
        res.status(200).send({message: "updated"})
    },

    find(req, res) {
        console.log(req.query)
        res.status(200).send({message: "info"})

    }
}