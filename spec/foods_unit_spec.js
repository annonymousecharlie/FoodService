let request = require("request");
let food = require("../modules/food");

describe("Unit tests on food module", () => {
    describe("load all food", () => {
       
        it("have 4 elements", () => {
            let results = food.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load specific food", () => {
       
        it("with brand name Oreo", () => {
            let results = food.query_by_arg("brand", "Oreo");
            expect(results.name).toBe("The Original Sandwich");
        });
       
        //exception test  (argument does not exists)
        it("with package name Oreo", () => {
            expect( () => {
                food.query_by_arg("package", "Oreo");
            }).toThrow("Unknow parameter package");
        });
        //negative test to load food by brandname (value does not exists)
        it("with brand name Amul", () => {
            let results = food.query_by_arg("brand", "Amul");
            expect(results).toBeNull();
        });
       
    });

    

});
