'use strict';
const errorHandler = require('./error-handlers/500.js');
const notFounErrorHandler = require('./error-handlers/404.js');




const express=require('express');
const app = express();
const logger = require('./middleware/logger');
const validat = require('./middleware/validator');



app.use(logger); //not working after the routs
app.use(validat);

// add routs
app.get('/',(req,res)=>{
  res.status(200).send('Hello Home');
});

app.get('/person',(req,res)=>{
//   console.log(req.method);
//   console.log(res.method);

  res.status(200).json({
    name: req.query.name

  });
});




//add handlers //should be after routs
app.use('*',notFounErrorHandler);
app.use(errorHandler);

// Listening
function start(port){

  app.listen(port,()=>console.log(`listning on PORT${port}`));
}


//Modularity
module.exports={
  app:app,
  start:start,
};
