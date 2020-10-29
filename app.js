const express = require('express');

//express app
const app = express();

//register ejs
app.set('view engine','ejs');

//running the app
app.listen(3000);

//handling get requests

app.get('/',(req,res)=>{

  blogs = [
    {title:"ABC",snippet:"qwoieufsdmfkls ijrweoi wejksdfl wefwef"},
    {title:"SDJE",snippet:"qwoieufsdmfkls ijrweoi wejksdfl wefwef"},
    {title:"ASKD",snippet:"qwoieufsdmfkls ijrweoi wejksdfl wefwef"}
  ];
  res.render('index',blogs); 

});


app.get('/about',(req,res)=>{

    res.render('about',{name:'HS'}); 
  
  });

  app.get('/blogs/create',(req,res)=>{

    res.render('create'); 
    
  });

//handling 404s
app.use( (req,res) => {
    res.status(404).render('404');
});