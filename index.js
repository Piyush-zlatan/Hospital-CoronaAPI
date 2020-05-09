const express = require('express');
const app = express();
const port = 8000;      //Setting port

const db = require('./config/mongoose');
//Setting up passport strategy
const passportJWT = require('./config/passport-jwt-strategy');
app.use(express.urlencoded());      //using middlewares 
app.use(express.json());

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running on port: ${port}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);

});

module.exports = app;