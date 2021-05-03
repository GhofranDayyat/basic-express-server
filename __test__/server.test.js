'use strict'
const server = require('../src/server.js');


//mock server
const superTest = require('supertest');
const mockServer = superTest(server.app);

describe(`validat name `,()=>{
    
   it('given an name in the query string, the output object is correct',async ()=>{
    let req =await mockServer.get('/person?name=ghofran');
    let res =await mockServer.get('/person?name=ghofran');
       console.log('aaaaaaaaa',req.body.name)
       expect(req.body.name).toEqual('ghofran')
   })

})
