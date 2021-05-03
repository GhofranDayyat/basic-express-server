'use strict'

const server = require('../src/server.js');


//mock server
const superTest = require('supertest');
const mockServer = superTest(server.app);

describe(`validat name `,()=>{
    
    
   
   it('500 if no name in the query string',async ()=>{
       let res =await mockServer.get('/person?name=');
       expect(res.status).toEqual(500)
   })

   it('200 if the name is in the query string',async ()=>{
    let res =await mockServer.get(`/person?name=ghofran`);
    expect(res.status).toEqual(200)
})

})
