const express = require('express');
const bodyParser = require('body-parser');

const app = express();



app.use('/',(req, res , next) => {
    next();
});

app.use(bodyParser.urlencoded({extended:false}));

app.use('/message',(req, res , next) => {
    res.send('<form action="/send-message" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
});

app.post('/send-message',(req,res,next)=>{
    console.log(req.body);  
    res.redirect('/');
});

app.use('/',(req, res , next) => {
    res.send('<h1>Hello from express!<h1>');
});

app.listen(3000);

