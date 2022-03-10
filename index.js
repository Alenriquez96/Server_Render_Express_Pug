const express = require('express');//Importando módulo NPM(librería)
const fetch = require("node-fetch");
const env = require("dotenv").config();
const request = require("request");
const apikey = process.env.API_KEY;
const bodyParser = require("body-parser");
const app = express();//app es un objeto que representa al servidor
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static("./public"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res) =>{
   res.render("home.pug");
});

app.get('/films/:title?', async(req,res) =>{
    try{
        let f = await fetch(`https://www.omdbapi.com/?t=${req.params.title}&apikey=475a64fb`);
        let title = await f.json();
        res.render("films.pug", {films:title});
    }
    catch(error){
        console.log(`ERROR: ${error.stack}`);
    }
});


app.post('/', (req,res) =>{
    const film = req.body.films;
    res.redirect(`http://localhost:3000/films/${film}`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })