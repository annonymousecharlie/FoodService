let request = require("request");
let foods = require("../modules/food");

describe("Unit tests on food module", () => {
    describe("load all food", () => {
        //positive test to load all foods
        it("have four elements", () => {
            let results = foods.list();
            expect(results.result.length).toBe(4);
        });  
    });
    describe("load specific food", () => {
        //positive test to load food by brand
        it("with brnad oreo", () => {
            let results = foods.query_by_arg("brand", "Oreo");
            expect(results.brand).toBe("Oreo");
        });
        //positive test to load contact by first name
        it("with name Peanut Butter", () => {
            let results = foods.query_by_arg("name", "Peanut Butter");
            expect(results.brand).toBe("KRAFT");
        });
        //exception test to load contact by mfg (argument does not exists)
        it("with argument mfg", () => {
            expect( () => {
                foods.query_by_arg("mfg", "28/02/2018");
            }).toThrow("Unknow parameter mfg");
        });
        //negative test to load contact by brand (value does not exists)
        it("with first brand cadburry", () => {
            let results = foods.query_by_arg("brand", "cadburry");
            expect(results).toBeNull();
        });
       
    });

});
