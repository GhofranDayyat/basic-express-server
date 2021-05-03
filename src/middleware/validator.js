'use strict';

module.exports=(req,res,next)=>{
  // console.log(parseFloat(req.query));
  console.log(`validatName : ${req.query.name},${typeof req.query.name==='string'}`);
  const name =(req.query.name);


  if( name!==''){
    next();
  }else{
    next('you should enter name'); // send text or obj to 500 error

  }

};
