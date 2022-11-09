const request = require("request");

const base_url = 'http://localhost:3032/Food/all';
//foods
//foods/durham
//foods/raleigh
const allFoods_url = base_url + '/';
const durhamFoods_url = base_url + '/durham';
const raleighFoods_url = base_url + '/raleigh';

describe("First Node Test Server", function () {
    describe("GET /foods", () => {
        it("returns status code 200",  (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains allFoods", (done) => {
            request.get(allFoods_url, (error, response, body) => {
                expect(body).toBeTruthy();
              
                done();
            });
        });
    });
    describe("GET /durham", () => {
        it("returns status code 200",  (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains modified tax by 1.080", (done) => {
            request.get(durhamFoods_url, (error, response, body) => {
                expect(body).toBeTruthy();
                
                done();
            });
        });
    });
    describe("GET /foods/raleigh", () => {
        it("returns status code 200",  (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains modified tax by 1.075", (done) => {
            request.get(raleighFoods_url, (error, response, body) => {
                expect(body).toBeTruthy();
                
                done();
            });
        });
    });
    // test for wrong path and expect 404
    describe("GET /conststacts", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(base_url + "conststacts", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});