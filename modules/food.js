const fs = require('fs');

let read_json_file = () => {
    let file = './data/Foods.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.query_by_arg = (arg, value) => {
    let json_result = JSON.parse(read_json_file());
    var obj = JSON.parse(fs.readFileSync('./data/Foods.json', 'utf8'));
    // all foods are stored in a "result" object
    let result = json_result;
    for (let i = 0; i < result.length; i++) {
        let food = result[i];

        if (food[arg] === undefined){
            throw new Error("Unknow parameter " + arg);
        }
        if (food[arg] === value) {
            return food;
        }

    }
    return null;
};

exports.modifyPrice = (param) => {
    let json_result = JSON.parse(read_json_file());
    let result = json_result;

    let modifiedTax = 0;

    if(param.toLowerCase() === "raleigh") {
        modifiedTax = 1.075;
    }
    else if(param.toLowerCase() == "durham") {
        modifiedTax = 1.080;
    }
    else {
        throw new Error("Unknow parameter " + param);
    }

    for (let i = 0; i < result.length; i++) {
        result[i].price = (result[i].price * modifiedTax).toFixed(3);
    }

    return result;

}