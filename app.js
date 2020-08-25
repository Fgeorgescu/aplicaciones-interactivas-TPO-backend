const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();


// Para poder traer los jsons
const fs = require('fs');


app.use(logger('dev'));

/** This is a description of the foo function. */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



const mockUser = (id) => {
    return {
        userId: id,
        username: "fgeorgescu",
        type: "employee",
        mail: "fgeorgescu@uade.edu.ar"
    }
}

let historiaMock = JSON.parse(fs.readFileSync('./mocks/historiaClinica/historiaClinica.json'));
let consultasMock = JSON.parse(fs.readFileSync('./mocks/historiaClinica/historiaConsultas.json'));


require('./routes')(app);

app.post('/users', (req, resp) => {
    let body = bodyParser.json(req.body)
    console.log(req.body)
    resp.status(201).send()
}
);

app.get('/users/:id', (req, resp) => resp.status(200).json(mockUser(req.params.id)));
app.get('/users/:id/historia', (req, resp) => resp.status(200).json(historiaMock));
app.get('/users/:id/consultas', (req, resp) => resp.status(200).json(consultasMock));

app.get('*', (req, resp) => resp.status(404).json({
    message: 'RESOURCE NOT FOUND'
}));





const port = parseInt(process.env.PORT, 10) || 8000;

const server = http.createServer(app);
server.listen(port);

module.exports = app;