const express = require('express');
const port = 8000;
const app = express();
//use express routes
app.use('/', require('./routes/index'));
app.listen(port, function(err){
    if(err){
        console.log('error', err);
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
})