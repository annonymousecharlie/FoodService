const fs = require('fs');

let read_json_file = () => {
    let file = './data/food.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.query_by_arg = (arg, value) => {
    let json_result = JSON.parse(read_json_file());
    // all foods are stored in a "result" object
    let result = json_result.result;
    console.log("query by arg: " + arg + " " + value);
    for (let i = 0; i < result.length; i++) {
        let food = result[i];
        if (food[arg] === undefined){
            throw new Error("Unknow parameter " + arg);
        }
        if (contact[arg] === value) {
            return food;
        }

    }
    return null;
};
