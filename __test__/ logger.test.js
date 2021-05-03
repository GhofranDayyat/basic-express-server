'use strict'


const server = require('../src/server.js');
const validat = require('../src/middleware/logger');


//mock server
const superTest = require('supertest');
const mockServer = superTest(server.app);

describe(`validat method and rout `,()=>{
    
    
   
   it('404 on a bad route',async ()=>{
       let res =await mockServer.get('/bad-rout');
       expect(res.status).toEqual(404)
   })

   it('404 on a bad method', async () => {
    let res = await mockServer.post('/person');
    expect(res.status).toEqual(404)
    })
})