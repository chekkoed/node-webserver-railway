require('dotenv').config();
const express = require('express');
const app = express();

const port =process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');




//Servir contenido estatico
app.use(express.static('public'))

app.get('/',  (req, res) =>{
    res.render('home', {
      nombre: 'Sergio Diaz',
      titulo:'Curso de Node'
    });
  });

app.get('/generic',  (req, res) =>{
    // res.sendFile(__dirname+'/public/generic.html')
    res.render('generic', {
      nombre: 'Sergio Diaz',
      titulo:'Curso de Node'
    });
  });
  app.get('/elements',  (req, res) =>{
    res.render('elements',{
      nombre:'Sergio Diaz',
      titulo:'Curso de Node'
    });
  });

  app.get('*',  (req, res) =>{
    res.sendFile(__dirname+'/public/404.html');
  });

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});