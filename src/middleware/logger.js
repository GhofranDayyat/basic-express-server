'use strict'

module.exports=(req,res,next)=>{ // next mean don't stop after middelwear and excute the CB 
  console.log(`method: ${req.method},path ${req.path}`);
  req.addtionalProperty='New property'; // this way to adding value to req body obj

  next();
};


