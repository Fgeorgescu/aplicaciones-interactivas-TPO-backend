const express = require('express');
const cors = require('cors');

const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();

const authorization = require('./auth/authorization');


app.use(logger('dev'));
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//Desactivar el http 304 para evitar errores en el front
app.use(function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();    
  });

require('./routes')(app);

app.get('/ping', (req, resp) => {
    resp.status(200).send("pong")
});


app.get('*', (req, resp) => resp.status(404).json({
    message: 'RESOURCE NOT FOUND'
}));





const port = parseInt(process.env.PORT, 10) || 8000;

const server = http.createServer(app);
server.listen(port, () => {console.log(`listenint to port ${port}`)});

module.exports = app;