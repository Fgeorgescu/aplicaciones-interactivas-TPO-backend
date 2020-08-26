const express = require('express');
const cors = require('cors');

const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();

const authorization = require('./auth/authorization');

// Para poder traer los jsons
const fs = require('fs');


app.use(logger('dev'));
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


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

app.post('/post/test', (req, resp) => {
    let body = bodyParser.json(req.body)
    console.log("LLEGÓ UN POST DE TEST:")
    console.log(req.body)
    resp.status(201).send()
}
);

app.get('/users/:id', authorization, (req, resp) => resp.status(200).json(mockUser(req.params.id)));
app.get('/users/:id/historia', (req, resp) => resp.status(200).json(historiaMock));
app.get('/users/:id/consultas', (req, resp) => resp.status(200).json(consultasMock));

app.get('*', (req, resp) => resp.status(404).json({
    message: 'RESOURCE NOT FOUND'
}));





const port = parseInt(process.env.PORT, 10) || 8000;

const server = http.createServer(app);
server.listen(port, () => {console.log(`listenint to port ${port}`)});

module.exports = app;