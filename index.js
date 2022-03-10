const express = require('express');//Importando módulo NPM(librería)
const fetch = require("node-fetch");
const app = express();//app es un objeto que representa al servidor
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());


app.get('/', (req,res) =>{

});

app.get('/film/:title', (req,res) =>{

});

app.post('/film/', (req,res) =>{

});