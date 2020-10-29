const express = require('express');

//express app
const app = express();

//register ejs
app.set('view engine','ejs');

//running the app
app.listen(3000);

//handling get requests

app.get('/',(req,res)=>{

    res.sendFile('./views/index.html',{root:__dirname});
});

//handling 404s
app.use( (req,res) => {
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});