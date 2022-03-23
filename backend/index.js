const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');


app.use(express.json());

app.use((request,response,next) =>{
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    app.use(cors());
    next();
   
});

app.use(routes)


app.listen(8080, console.log('servidor online'));