/**
 * Arquivo principal onde o servidor está rodando
 * @author Kayky Casagrande & João Cirne
 * @date 04/12/2020
 */

const { uri, port } = require('./config/api.json');

const express = require('express');



const router = require('./routes');


const app = express();

app.use('/', router);

app.listen(port, () => {

    console.log(`http://${uri}:${port}`)
});