const server = require("./api/server.js");

const request = require("supertest");

// login end point test
describe('POST', ()=> {
    describe('POST', ()=>{
        it('return a 404 OK', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it('JSON response', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.type).toMatch('text/html')
            })  
         })  
    })
})

// register end point test
describe('POST', ()=> {
    describe('POST', ()=>{
        it('return a 404 OK', ()=>{
            return request(server)
            .get('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it('JSON response', ()=>{
            return request(server)
            .post('/api/auth/register')
            .then(res => {
                expect(res.type).toMatch('text/html')
            })  
         })  
    })
})

// Testing server
describe("server.js", () => {
    describe("GET/", ()=> {
    it('should return 200 OK', async() => {
        const response = await request(server).get("/");
        expect(response.status).toBe(200);
    });

    it('should return JSON', () => {
        return request(server).get("/") 
        .then(res => {
            expect(res.type).toBe("application/json")
        })
     });
 
     it('should respond with { "api: Up and running" }', () => {
        return request(server)
        .get("/") 
        .then(res => {
             expect(res.body.api).toBe("Up and running")
        })
    });
  })
})

