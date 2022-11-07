let request = require("request");

const base_url = "http://localhost:8080/team";

console.log("Starting test");

describe("First Node Test Server", () => {
describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
            });
        }); 

        it("should have team members names", (done) => {
            request.get(base_url, (error, response, body) => {
            expect(body).toBe(
                JSON.stringify(
                    {
                        "team":"TEAM-food-backend",
                        "membersList":["Aarushi Saini","Chethan G Kottari","Preetham V K","M V Ranjitha"]
                    }
                )
            );
            done();
            });
        });
    });
});
